import s from './SubTaskCreateForm.module.scss';
import classNames from 'classnames/bind';
import {useState, useRef, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { changeSubTodos, removeSubTodo } from '../../../slice/appSlice';

const cx = classNames.bind(s);

export default function SubTaskCreateForm(props) { 
    const {id, subTodoID, description, edit, done} = props;   
    const [active, setActive] = useState(edit);
    const [value, setValue] = useState(description);
    const [newDone, setNewDone] = useState(done);
    const dispatch = useDispatch();
    const inputRef = useRef();

    const span = cx({
        checked: newDone,
    });
    
    const close = () => {
        if(value.trim().length > 0) {
            const subTodoDatas = {
                id: subTodoID,
                done: newDone,
                description: value,
                edit: false,
                active: false
            };
            setActive(false);
            dispatch(changeSubTodos({id:id, subTodoID:subTodoID, value: subTodoDatas}));
        } else {
            setActive(false);
            dispatch(removeSubTodo({id: id, subTodoID:subTodoID}));
        }
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
            />
            
        <div className={s.description_button}>
            <button className={s.description_button_save} onClick={() => setActive(false)}>Сохранить</button>
        </div>
        </>
    ) : <p className={s.description_text} onClick={changeDescription}>Описание: <br/>{value}</p>;

    useEffect(() => {
        if(active) {
            inputRef.current.focus();
        }
    }, [active]);



    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.button}>
                    <div className={s.button_checkbox}>
                        <label className={s.button_checkbox_label}>Выполнено:
                            <input
                                type="checkbox"
                                className={s.button_checbox}
                                checked={newDone}
                                onChange={() => setNewDone(!newDone)}
                            />
                            <span className={span}/>
                        </label>
                    </div>
                    <button className={s.button_close} onClick={close}>&#10006;</button>
                </div>
                <div className={s.description}>
                    {descriptionItem}                    
                </div>
            </div>
        </div>
    )
}