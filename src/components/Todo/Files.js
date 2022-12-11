import s from './Todo.module.scss';
import uuid from 'react-uuid';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFile } from '../../slice/appSlice';

export default function Files({projID}) {
    const ref = useRef();
    const files = useSelector(state => state.data.find(proj => proj.id === projID)).todos.find(todo => todo.active).files;
    const dispatch = useDispatch();
    
    const addClick = () => ref.current.click();
    
    const addNewFile = () => {
        let newFile;
        const file = ref.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            newFile = {
                id: uuid(),
                name: file.name,
                image: reader.result 
            };
            dispatch(addFile({id: projID, file: newFile}));
        };        
    };

    

    return (
        <div className={s.files}>
            <h3 className={s.files_title}>Вложенные файлы</h3>
            <div className={s.files_block}>
                {files.map(file => (file &&
                    <div className={s.files_cont} key={file.id}><img  alt='someimage' src={file.image} className={s.files_image}/></div>
                ))}
            </div>
            <input className={s.files_input}
                type='file'
                accept='image/*, .png, .jpg, .gif, .web'
                ref={ref}
                onChange={addNewFile}
             />
            <div className={s.files_add} onClick={addClick}>Добавить файл</div>
        </div>
    )
}