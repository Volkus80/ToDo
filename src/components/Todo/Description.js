import s from './Todo.module.scss';
import {useState, useRef, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { changeTaskItem } from '../../slice/appSlice';

export default function Description({description, id}) {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(description);
    const dispatch = useDispatch();
    const inputRef = useRef();
    
    const save = () => {
        dispatch(changeTaskItem({id, item:'description', value}));
        setActive(false);
    };

    const changeDescription = () => {        
        setActive(true);
    };
    
    const descriptionItem = active ? (
        <>
        <textarea 
                className={s.description_input}
                value={value} 
                ref={inputRef}
                onChange={e => setValue(e.target.value)}
                onBlur={save}
            />
            
        <div className={s.description_button}>
            <button className={s.description_button_save} onClick={save}>Сохранить</button>
        </div>
        </>
    ) : <p className={s.description_text} onClick={changeDescription}>{description}</p>;

    useEffect(() => {
        if(active) {
            inputRef.current.focus();
        }
    }, [active]);

    return (
        <div className={s.description}>
            <h3 className={s.description_title}>
                Описание:
            </h3>
            {descriptionItem}
        </div>
    )
}