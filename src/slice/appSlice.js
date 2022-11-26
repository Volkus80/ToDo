import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const data = [
    {
        name: 'Проект1',
        id: '1',
        todos: [
            {
                id: '1',
                title: 'Задача1',
                description: 'Сделать что-то',
                createDate: '11-11-2022',
                timeInDev: '',
                finishDate: '',
                importance: 'low',
                files: '',
                status: 'Queue',
                todos: {},
                comments: {}
            },
            {
                id: '2',
                title: 'Задача2',
                description: 'Сделать еще что-то',
                createDate: '11-11-2022',
                timeInDev: '',
                finishDate: '',
                importance: 'low',
                files: '',
                status: 'Development',
                todos: {},
                comments: {}
            },
            {
                id: '3',
                title: 'Задача3',
                description: 'Работать',
                createDate: '11-11-2022',
                timeInDev: '',
                finishDate: '',
                importance: 'low',
                files: '',
                status: 'Queue',
                todos: {},
                comments: {}
            },
            {
                id: '4',
                title: 'Задача4',
                description: 'Отдыхать',
                createDate: '11-11-2022',
                timeInDev: '',
                finishDate: '',
                importance: 'low',
                files: '',
                status: 'Development',
                todos: {},
                comments: {}
            },
            {
                id: '5',
                title: 'Задача5',
                description: 'Разработка архитектуры',
                createDate: '11-11-2022',
                timeInDev: '',
                finishDate: '',
                importance: 'low',
                files: '',
                status: 'Done',
                todos: {},
                comments: {}
            },
            {
                id: '6',
                title: 'Задача6',
                description: 'Пойти на фитнес',
                createDate: '11-11-2022',
                timeInDev: '',
                finishDate: '',
                importance: 'low',
                files: '',
                status: 'Done',
                todos: {},
                comments: {}
            },
            {
                id: '7',
                title: 'Задача7',
                description: 'Разработка SPA',
                createDate: '11-11-2022',
                timeInDev: '',
                finishDate: '',
                importance: 'low',
                files: '',
                status: 'Done',
                todos: {},
                comments: {}
            },
            {
                id: '8',
                title: 'Задача8',
                description: 'Придумайте дизайн',
                createDate: '11-11-2022',
                timeInDev: '',
                finishDate: '',
                importance: 'low',
                files: '',
                status: 'Queue',
                todos: {},
                comments: {}
            },
        ]
    },
    {
        name: 'Проект2',
        id: '2',
        todos: [
            {
                id: '1',
                title: 'Задача1',
                description: 'Сделать что-то',
                createDate: '11-11-2022',
                timeInDev: '',
                finishDate: '',
                importance: 'low',
                files: '',
                status: 'Done',
                todos: {},
                comments: {}
            },
        ]
    },
    {
        name: 'Проект3',
        id: '3',
        todos: [
            {
                id: '1',
                title: 'Задача1',
                description: 'Сделать что-то',
                createDate: '11-11-2022',
                timeInDev: '',
                finishDate: '',
                importance: 'low',
                files: '',
                status: 'Development',
                todos: {},
                comments: {}
            },
        ]
    },
];

export const appSlice = createSlice({
    name: 'data',
    initialState: data,
    reducers: {
       addProject(state, action){
        state.push(action.payload); 
       } 
    }
});

export const {addProject} = appSlice.actions;
export default appSlice.reducer;