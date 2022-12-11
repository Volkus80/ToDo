import { ItemTypes } from "../../DnD/ItemTypes";
import {useDrag} from 'react-dnd';
import s from './TodoList.module.scss';

export default function ListItem({id, title, onClick, finishDate}) {
    const [ {isDragging}, drag] = useDrag({
        type: ItemTypes.TODO,
        item:{            
            id: id,
            finishDate: finishDate
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const className = isDragging ? `${s.todosItem} ${s.dr}` : `${s.todosItem}`;

    return (
        <div 
            ref={drag}
            className={className} 
            id={id}            
         >
            <p className={s.text}>{title}</p>
            <span onClick={onClick}>&raquo;</span>
        </div>
    )
}