import { useSelector } from "react-redux";
import s from './TodoList.module.scss';

export default function TodosList({title, id}) {

    const data = useSelector(state => state.data);

    // const TodosItem = (
    //     <div className={s.todosItem}>
    //         <p className={s.text}>{text}</p>
    //         <span>&raquo;</span>
    //     </div>
    // )

    return (
        <div className={s.container}>
            <h3 className={s.title}>{title}</h3>
            <div className={s.wrapper}>
                {data.find(project => project.id === id).todos.map(todo => {
                    if (todo.status === title) {
                        return (
                            <div className={s.todosItem} id={todo.id} key={todo.key} draggable={true}>
                                <p className={s.text}>{todo.title}</p>
                                <span>&raquo;</span>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}