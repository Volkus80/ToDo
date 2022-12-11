import s from './Todo.module.scss';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import {addSubTodo} from '../../slice/appSlice';
import SubTask from './SubTask/SubTask';

export default function SubTasks({id, subtasks}) {
    const dispatch = useDispatch();
    const createSubTodo = () => {
        const value = {
            done: false,
            description: '',
            id: uuid(),
            active: true,
            edit: true
        };
        dispatch(addSubTodo({id: id, todo: value}));
    };
    const subTodosList = subtasks.map(function(task) {
        let item;
        if (task.description.trim().length > 0) {
            item = (
                <SubTask 
                key={task.id} 
                projID={id} 
                subTaskID={task.id}
                done={task.done}
                description={task.description}>
                    {task.description}
                </SubTask>
            );
        }
        return item;
    });
    return (
        <div className={s.subtasks}>
            <div className={s.subtasks_block}>{subTodosList}</div>
            <button className={s.subtasks_add} onClick={createSubTodo}>
                Добавить подзадачу
            </button>
            <div className={s.subtasks_block}></div>
        </div>
    )
}