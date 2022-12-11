import s from './ShowImageItem.module.scss';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { toggleImage } from '../../slice/appSlice';


const cx = classNames.bind(s);

export default function ShowImageItem({projID}) {
    const file = useSelector(
        state => state.data.find(
            proj => proj.id === projID
            ).todos.find(
                todo => todo.active === true
                ).files.find(
                    file => file.active === true
                    ));

    const dispatch = useDispatch();
    
    const onClick = () => dispatch(toggleImage({projID, fileID: file.id, imageState: false}));

    return file && (
        <div className={cx({
            'image_container': true,
            hidden: !file.active
        })}>
            <div className={s.image_wrapper}>
                <div className={s.image_close}>
                    <button className={s.image_close_button} onClick = {onClick}>&#10006;</button>
                </div>
                <div className={s.image_body}>
                    <img className={s.image_file} src={file.image} alt="Картинка" />
                </div>
            </div>
        </div>
    )
}