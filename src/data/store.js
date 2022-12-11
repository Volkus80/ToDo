import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../slice/appSlice';
import searchReducer from '../slice/searchSlice';
import todoReducer from '../slice/todoSlice';

const store = configureStore({
    reducer: {
        data: appReducer,
        search: searchReducer,
        todo: todoReducer
    }
});

export default store;