import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        searchTask(state, action) {
            return state = action.payload;
        }
    }
});

export default searchSlice.reducer;
export const {searchTask} = searchSlice.actions;