import s from './Todo.module.scss';
import {useState, useEffect, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { changeTaskItem } from '../../slice/appSlice';

const statusOptions = ['Queue', 'Development', 'Done'];

export default function TaskStatus({id, status}) {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(status);
    const dispatch = useDispatch();
    const ref = useRef();
        
    const save = () => {
        const date = value === 'Done' ? new Date().toLocaleDateString() : '';
        dispatch(changeTaskItem({id, item:'status', value, date: date}));
        setActive(false);
    };

    const changeStatus = () => {
        setActive(true);
    };

    useEffect(() => {
        if(active) ref.current.focus();
    },[active] );

    
    const statusItem = active ? (
        <>
        <select 
            className={s.task_status_select} 
            value={value} 
            ref={ref}
            onChange={e => setValue(e.target.value)}
            onBlur={save}
        >
            {statusOptions.map((option, i) => (<option key={i}>{option}</option>))}
        </select>            
        <div className={s.task_status_button}>
            <button className={s.task_status_button_save} onClick={save}>&#10004;</button>
        </div>
        </>
    ) : <p className={s.task_status_text} onClick={changeStatus}>{status}</p> ;


    return (
        <div className={s.task_status}>
            <p className={s.task_status_title}>Статус</p>
            <div className={s.task_status_container}>
                {statusItem}
            </div>
        </div>
    )
}