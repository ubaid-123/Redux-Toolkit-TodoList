import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './CounterSlice';
import { todoReducer } from './TodoSlice';

export const store= configureStore({
    reducer : {
        counterReducer : counterReducer,
        todoReducer : todoReducer 
    }
});