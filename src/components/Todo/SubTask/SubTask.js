import s from './SubTask.module.scss';
import classNames from 'classnames/bind';
import { openSubTodo } from '../../../slice/appSlice';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(s);

export default function SubTask(props) {
    const dispatch = useDispatch();
    const {projID, subTaskID, done, description} = props;
    const shortDescrition = description.slice(0, 10) + '...';
    const textStyle = cx({
        text: true,
        done: done
    });


    return (
        <div className={s.body} onClick={() => dispatch(openSubTodo({id:projID, subTodoID: subTaskID}))}>
            <p className={textStyle}>{shortDescrition}</p>
        </div>
    )
}