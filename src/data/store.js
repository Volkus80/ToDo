import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../slice/appSlice';

const store = configureStore({
    reducer: {
        data: appReducer
    }
});

export default store;