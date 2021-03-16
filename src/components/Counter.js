import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByValue, decrement, updateName } from '../store/CounterSlice';



function Counter() {
    const [value, setValue] = useState(0);
    const [name, setName] = useState("");

    const dispatch = useDispatch();
    const counter = useSelector((state)=>{
        return state.counterReducer.counter;
    })
    const nameValue = useSelector((state)=>{
        return state.counterReducer.user.name;
    })

  return (
    <div>
        Value = {counter}
        Name = {nameValue}
        <div>
            <button onClick={()=>{
                dispatch(increment())
            }}>Increment</button>
        </div>
        <div>
            <button onClick={()=>{
                dispatch(decrement())
            }}>Decrement</button>
        </div>
        <div>
            <input type="text" onChange={(e)=>{
                setValue(e.target.value)
            }}/>
            <button onClick={()=>{
                dispatch(incrementByValue(Number(value)))
            }}>Increment By Value</button>
        </div>    
        <div>
            <input type="text" onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <button onClick={()=>{
                const user = {
                    name : name,
                    email : "name@gmal.com",
                    age : 20
                }

                dispatch(updateName(user))
            }}>Update Name</button>
        </div>  

          
        
    </div>
  );
}

export default Counter;
