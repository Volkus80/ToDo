import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import s from './Todo.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { hideTodo } from '../../slice/todoSlice';
import { makeItemPassive } from '../../slice/appSlice';
import TaskTitle from './TaskTitle';
import TaskImportance from './TaskImportance';
import DateItem from './DateItem';
import Description from './Description';
import TaskStatus from './TaskStatus';
import SubTasks from './SubTasks';
import SubTaskCreateForm from './SubTask/SubTaskCreateForm';
import Comments from './Comments/Comments';
import Files from './Files';

const cx = classNames.bind(s);


export default function Todo() {
    const {id} = useParams();
    const hidden = useSelector(state => state.todo);
    const todo = useSelector(state => state.data.find(project => project.id === id).todos.find(todo => todo.active === true));
    const dispatch = useDispatch();
    

    const onClick = () => {
        dispatch(makeItemPassive({id: id}));
        dispatch(hideTodo());
    };


    

    return (
        todo && (
        <div className={cx({
            hidden: hidden,
            container: true,
            done: todo.status === 'Done',
            dev: todo.status === 'Development',
            queue: todo.status === 'Queue'
        })} >
            <div className={s.close}><button className={s.close_button} onClick = {onClick}>&#10006;</button></div>
            <div className={s.wrapper} >
                <div className={s.task}>
                    <p className={s.task_number}>№{todo.number}</p>
                    <TaskTitle title={todo.title} id={id}>{todo.title}</TaskTitle>
                    <TaskStatus id={id} status={todo.status}/>
                    <TaskImportance id={id} importance={todo.importance}/>
                </div>
                <DateItem createDate={todo.createDate} finishDate={todo.finishDate} />
                <Description id={id} description={todo.description}/>
                <SubTasks id={id} subtasks={todo.todos}/>
                <Files projID={id}/>
                <Comments projID={id}/>
               

            </div>
            {todo.todos.map(function(todo) {
                let item;
                if(todo.active) {
                    item = (
                        <SubTaskCreateForm 
                            key={todo.id}
                            id={id}
                            subTodoID={todo.id} 
                            description={todo.description}
                            edit={todo.edit}
                            done={todo.done}/>
                    )
                }
                return item;
            })}
        </div>)
    )
}