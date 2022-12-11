import s from './Todo.module.scss';
import { modifyDate, createLabel, coutDays } from '../../helpers/helper';

export default function DateItem({createDate, finishDate=''}) {  

    const days = coutDays(createDate, finishDate);
    const begin = createDate ? createDate : new Date().toLocaleDateString();
    
    return (
        <div className={s.time}>
            <p className={s.time_begin}>Дата начала: {modifyDate(begin)}</p>
            <p className={s.time_period}>Время в работе: {days} {createLabel(days)} </p>
            <p className={s.time_finish}>Дата окончания: {finishDate.length > 0 ? modifyDate(finishDate): ''}</p>
        </div>
    )
}