import s from './Todo.module.scss';
import {useState, useRef, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { changeTaskItem } from '../../slice/appSlice';

export default function TaskTitle({title, id, children}) {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(title);
    const dispatch = useDispatch();
    const inputRef = useRef();
    
    const save = () => {
        dispatch(changeTaskItem({id, item:'title', value}));
        setActive(false);
    };

    const changeTitle = () => {
        
        setActive(true);
    };
    
    const titleItem = active ? (
        <>
        <input 
                className={s.task_title_input} 
                value={value} 
                ref={inputRef}
                onChange={e => setValue(e.target.value)}
                onBlur={save}
            />
            
        <div className={s.task_title_button}>
            <button className={s.task_title_button_save} onClick={save}>&#10004;</button>
        </div>
        </>
    ) : <p  className={s.task_title_text} onClick={changeTitle}>{children}</p> ;

    useEffect(() => {
        if(active) {
            inputRef.current.focus();
        }
    }, [active]);

    return (
        <div className={s.task_title}>
            {titleItem}
        </div>
    )
}