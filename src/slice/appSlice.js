import { createSlice } from '@reduxjs/toolkit';


const data = [
    {
        name: 'Проект1',
        id: '1',
        todos: [
            {
                id: '1',
                number: '1',
                title: 'Задача1',
                description: 'Сделать что-то',
                createDate: '11.11.2022',
                active: false,
                finishDate: '',
                importance: 'низкий',
                files: [],
                status: 'Queue',
                todos: [],
                comments: []
            },
            {
                id: '2',
                number: '2',
                title: 'Задача2',
                description: 'Сделать еще что-то',
                createDate: '11.11.2022',
                active: false,
                finishDate: '',
                importance: 'средний',
                files: [],
                status: 'Development',
                todos: [],
                comments: []
            },
            {
                id: '3',
                number: '3',
                title: 'Задача3',
                description: 'Работать',
                createDate: '11.11.2022',
                active: false,
                finishDate: '',
                importance: 'низкий',
                files: [],
                status: 'Queue',
                todos: [],
                comments: []
            },
            {
                id: '4',
                number: '4',
                title: 'Задача4',
                description: 'Отдыхать',
                createDate: '11.11.2022',
                active: false,
                finishDate: '',
                importance: 'высокий',
                files: [],
                status: 'Development',
                todos: [],
                comments: []
            },
            {
                id: '5',
                number: '5',
                title: 'Задача',
                description: 'Разработка архитектуры',
                createDate: '11.11.2022',
                active: false,
                finishDate: '',
                importance: 'средний',
                files: [],
                status: 'Done',
                todos: [],
                comments: []
            },
            {
                id: '6',
                number: '6',
                title: 'Задача6',
                description: 'Пойти на фитнес',
                createDate: '11.11.2022',
                active: false,
                finishDate: '',
                importance: 'низкий',
                files: [],
                status: 'Done',
                todos: [],
                comments: []
            },
            {
                id: '7',
                number: '7',
                title: 'Задача7',
                description: 'Разработка SPA',
                createDate: '11.11.2022',
                active: false,
                finishDate: '',
                importance: 'средний',
                files: [],
                status: 'Done',
                todos: [],
                comments: []
            },
            {
                id: '8',
                number: '8',
                title: 'Задача8',
                description: 'Придумайте дизайн',
                createDate: '11.11.2022',
                active: false,
                finishDate: '',
                importance: 'высокий',
                files: [],
                status: 'Queue',
                todos: [],
                comments: []
            },
        ]
    },
    {
        name: 'Проект2',
        id: '2',
        todos: [
            {
                id: '1',
                number: '1',
                title: 'Задача1',
                description: 'Сделать что-то',
                createDate: '11.11.2022',
                active: false,
                finishDate: '',
                importance: 'низкий',
                files: [],
                status: 'Done',
                todos: [],
                comments: []
            },
        ]
    },
    {
        name: 'Проект3',
        id: '3',
        todos: [
            {
                id: '1',
                number: '1',
                title: 'Задача1',
                description: 'Сделать что-то',
                createDate: '11.11.2022',
                active: false,
                finishDate: '',
                importance: 'высокий',
                files: [],
                status: 'Development',
                todos: [],
                comments: []
            },
        ]
    },
];
const initialData = JSON.parse(localStorage.getItem('todoData'));


export const appSlice = createSlice({
    name: 'data',
    initialState: initialData || data,
    reducers: {
       addTodo(state, action){
        const {projID, todo} = action.payload;
        const project = state.find(proj => proj.id === projID);
        project.todos.push(todo); 
       },
       changeTodoStatus(state, action) {
        const {projectID, todoID, title, date} = action.payload;
        const draggableTodo = state.find(project => project.id === projectID).todos.find(todo => todo.id === todoID);
        draggableTodo.status = title;
        draggableTodo.finishDate = date;
       },
       makeItemActive(state, action) {
        const {projectID, todoID} = action.payload;
        const activeTodo = state.find(project => project.id === projectID).todos.find(todo => todo.id === todoID);
        activeTodo.active = true;
       }, 
       makeItemPassive(state, action) {
        const {id} = action.payload;
        const activeTodo = state.find(project => project.id === id).todos.find(todo => todo.active === true);
        activeTodo.active = false;
       },
       changeTaskItem(state, action) {
        const {id, item, value, date} = action.payload;
        const activeTodo = state.find(project => project.id === id).todos.find(todo => todo.active === true);
        activeTodo[item] = value;
        activeTodo.finishDate = date;
       },
       addSubTodo(state, action) {
        const {id, todo} = action.payload;
        const activeTodo = state.find(project => project.id === id).todos.find(todo => todo.active === true);
        activeTodo.todos.push(todo);
       },
       removeSubTodo (state, action) {
        const {id, subTodoID} = action.payload;
        const activeTodo = state.find(project => project.id === id).todos.find(todo => todo.active === true);
        activeTodo.todos = activeTodo.todos.filter(todo => todo.id !== subTodoID);
       },
       changeSubTodos(state, action) {
        const {id, subTodoID, value} = action.payload;
        const activeTodo = state.find(project => project.id === id).todos.find(todo => todo.active === true);
        const subTodo = activeTodo.todos.find(todo => todo.id === subTodoID);
        subTodo.active = value.active;
        subTodo.edit = value.edit;
        subTodo.description = value.description;
        subTodo.done = value.done;
       },
       openSubTodo (state, action) {
        const {id, subTodoID} = action.payload;
        const activeTodo = state.find(project => project.id === id).todos.find(todo => todo.active === true);
        const subTodo = activeTodo.todos.find(todo => todo.id === subTodoID);
        subTodo.active = true;        
       },
       addComment (state, action) {
        const {id, comment} = action.payload;
        const activeTodo = state.find(project => project.id === id).todos.find(todo => todo.active === true);
        activeTodo.comments.push(comment);
       },
       addFile (state, action) {
        const {id, file} = action.payload;
        const activeTodo = state.find(project => project.id === id).todos.find(todo => todo.active === true);
        activeTodo.files.push(file);
       },
       toggleImage (state, action) {
        const {projID, fileID, imageState} = action.payload;
        const activeTodo = state.find(project => project.id === projID).todos.find(todo => todo.active === true);
        const file = activeTodo.files.find(file => file.id === fileID);
        file.active = imageState;
       }

    }
});

export const {
    addTodo, 
    changeTodoStatus, 
    makeItemActive, 
    makeItemPassive, 
    changeTaskItem, 
    addSubTodo,
    removeSubTodo,
    changeSubTodos,
    openSubTodo,
    addComment,
    addFile,
    toggleImage} = appSlice.actions;
export default appSlice.reducer;