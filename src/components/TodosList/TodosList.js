import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ItemTypes } from "../../DnD/ItemTypes";
import {useDrop} from 'react-dnd';
import s from './TodoList.module.scss';
import ListItem from "./ListItem";
import { changeTodoStatus, makeItemActive } from '../../slice/appSlice';
import { showTodo } from "../../slice/todoSlice";


export default function TodosList({title}) {
    const {id} = useParams();
    const dispatch = useDispatch();
    const todos = useSelector(state => state.data.find(project => project.id === id).todos);
    const searchParam = useSelector(state => state.search);
    const setNewStatus = (item) => {
        const date = title === 'Done' ? new Date().toLocaleDateString() : '';
        dispatch(changeTodoStatus({projectID:id, todoID:item.id, title, date}));
    };
    const[, drop] = useDrop(() => ({
        accept: ItemTypes.TODO,
        drop: (item) => setNewStatus(item),
        // drop: (item) => dispatch(changeTodoStatus({projectID:id, todoID:item.id, title}))
    })); 

    

    const addStyle = (baseStyle) => {
        let style;
        switch (title) {
        case'Queue' :
            style = `${baseStyle}  ${s.queue}`;
        break;
        case 'Development' :
            style = `${baseStyle}  ${s.development}`;
        break;
        default: style = `${baseStyle}`;
        break;
        }
        return style;
    };

    const contStyle = addStyle(`${s.container}`);
    const titleStyle = addStyle(`${s.title}`);

    const onClick = (projectID, itemID) => {
        dispatch(showTodo());
        dispatch(makeItemActive(projectID, itemID));
    };

    return (
        <div className={contStyle}>
            <h3 className={titleStyle}>{title}</h3>
            <div className={s.wrapper} ref={drop}>
                {todos.filter(todo => todo.title.toLowerCase().includes(searchParam)  || todo.number.includes(searchParam)).map(function(todo) {
                    let item;
                    if (todo.status === title) {
                        item = (
                           <ListItem 
                                key={todo.id} 
                                id={todo.id}
                                projectID={id} 
                                finishDate={todo.finishDate}
                                title={todo.title}
                                onClick={() => onClick({projectID: id, todoID: todo.id})}
                            /> 
                        )
                    }
                    return item;
                })}
            </div>
        </div>
    )
}