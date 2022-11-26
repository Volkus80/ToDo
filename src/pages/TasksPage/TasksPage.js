import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TodosList from "../../components/TodosList/TodosList";
import s from './TaskPage.module.scss';

export default function TasksPage() {
    const {id} = useParams();
    const data = useSelector(state => state.data);
    const project = data.find(elem => elem.id === id);

    return (
        <div className={s.container}>
            <TodosList id={id} title='Queue'/>
            <TodosList id={id} title='Development'/>
            <TodosList id={id} title='Done'/>
        </div>
    )
}