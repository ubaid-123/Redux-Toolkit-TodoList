import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const todoSlice = createSlice({
    name : "TodoSlice",
    initialState : {
        todos : [{
            id : 0,
            title : "",
            isComplete : false,
            isDelete : false 
        }]
    },
    reducers:{
        addTodo : (state,action)=>{
              state.todos.push({id: uuidv4(), title: action.payload, isComplete: false, isDelete: false})
        },
        completedElements : (state,action)=>{
            state.todos.map((obj)=>{
                if(obj.id == action.payload)
                    obj.isComplete = true
            })
        },
        deletedElement : (state,action)=>{
           state.todos.map((obj)=>{
                if(obj.id == action.payload)
                    obj.isDelete = true
           })     
        }
    }
}) 

export const { addTodo, completedElements, deletedElement } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
