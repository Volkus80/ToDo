import { Link, useParams } from "react-router-dom";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {addTodo} from '../../slice/appSlice';
import { showTodo } from "../../slice/todoSlice";
import TodosList from "../../components/TodosList/TodosList";
import SearchBar from "../../components/SearchBar/SearchBar";
import s from './TaskPage.module.scss';
import Todo from "../../components/Todo/Todo";

const todoStates = ['Queue', 'Development', 'Done'];

export default function TasksPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const proj = useSelector(state => state.data.find(proj => proj.id === id));

    const getLastNumber = () => {
        if (proj.todos.length > 0) {
            const numbers = proj.todos.map(todo => +todo.number);
            const lastNumber = Math.max(...numbers);
            return String(lastNumber+1);
        }
        return '1';
    };
    
    const addNewTodo = () => {
        const newTodo = {
            id: uuid(),
            number: getLastNumber(),
            title: 'Введите наименование',
            description: '',
            createDate: new Date().toLocaleDateString(),
            active: true,
            finishDate: '',
            importance: 'низкий',
            files: [],
            status: 'Queue',
            todos: [],
            comments: []
        };
        dispatch(addTodo({projID: id, todo: newTodo}));
        dispatch(showTodo());
    };

    return (
        <div className={s.container}>
            <header className={s.header}>
                <div className={s.nav}>
                    <Link to='/' className={s.nav_link}>Проекты</Link>
                    <button 
                        className={s.nav_button}
                        onClick={addNewTodo}
                    >Добавить задачу</button>
                </div>
                <SearchBar />
            </header>
            <div className={s.todoListcontainer}>
                {todoStates.map((state, index) => (<TodosList key={index} title={state}/>))}
            </div>
            <Todo />                
        </div>
    )
}