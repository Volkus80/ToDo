import s from './Todo.module.scss';
import {useState, useEffect, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { changeTaskItem } from '../../slice/appSlice';

const importanceOptions = ['низкий', 'средний', 'высокий'];

export default function TaskImportance({id, importance}) {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(importance);
    const dispatch = useDispatch();
    const ref = useRef();
        
    const save = () => {
        dispatch(changeTaskItem({id, item:'importance', value}));
        setActive(false);
    };

    const changeImportance = () => {
        setActive(true);
    };

    useEffect(() => {
        if(active) ref.current.focus();
    },[active] );
    
    const importanceItem = active ? (
        <>
        <select 
            className={s.task_importance_select} 
            value={value} 
            ref={ref}
            onChange={e => setValue(e.target.value)}
            onBlur={save}
        >
            {importanceOptions.map((option, i) => (<option key={i}>{option}</option>))}
        </select>            
        <div className={s.task_importance_button}>
            <button className={s.task_importance_button_save} onClick={save}>&#10004;</button>
        </div>
        </>
    ) : <p className={s.task_importance_text} onClick={changeImportance}>{importance}</p> ;


    return (
        <div className={s.task_importance}>
            <p className={s.task_importance_title}>Приоритет</p>
            <div className={s.task_importance_container}>
                {importanceItem}
            </div>
        </div>
    )
}