
import { useSelector , useDispatch} from 'react-redux'
import { addTodo, completedElements, deletedElement } from '../store/TodoSlice'
import { useState } from 'react';

export const TodoDisplay = ()=>{
    const dispatch = useDispatch();

    const name = useSelector((state)=>{
        return state.counterReducer.user.name;
    })
    const todoList = useSelector((state)=>{
        return state.todoReducer.todos
    })
    const myList = todoList.map((obj) => obj);
    
    const completedItems = (
        myList.filter(item => item.isComplete == true)
    )

    const notCompletedItems = (
        myList.filter(item => item.isComplete == false)
    )


    const [item, setItem] = useState("")
    const [filters, setFilters] = useState(0)

    return(
        
        <div> 
          { console.log(todoList)}
          <h2>Todo List</h2>
          <div>User Name {name}</div> 
          
          <div>
          {
          (filters == 0)?(
        <ul>
            {
               todoList.map((obj) => {
                 if(obj.title != ""){
                 return( 
                 <li style={(obj.isDelete == true)?{textDecoration:"line-through"}:{}}>
                  { 
                     (obj.isDelete == false)?(
                      <input type="checkbox" checked={(obj.isComplete == true)?(true):(null)} onChange={() => dispatch(completedElements(obj.id))}/>
                     ):(null)
                    
                  }
                  &nbsp;
                   {obj.title}
                   &nbsp;
                   {
                     
                     (obj.isComplete == false && obj.isDelete == false)?( 
                   <input type ="button" value="x" onClick={()=> dispatch(deletedElement(obj.id))} />
                     ):(null) 
                  }
                 </li>
                 )
                 } })
              
            }
           </ul>):(null)
        }
            {
          (filters == 3)?(
        <ul>
            {
               completedItems.map((obj) => {
                if(obj.title != ""){
                return( 
                 <li style={(obj.isDelete == true)?{textDecoration:"line-through"}:{}}>
                   {obj.title}
                 </li>
                 )
                 }
              })
              
            }
           </ul>):(null)
        }
              {
          (filters == 2)?(
        <ul>
            {
               notCompletedItems.map((obj) => {
                if(obj.title != "" && obj.isDelete == false){
                return( 
                 <li style={(obj.isDelete == true)?{textDecoration:"line-through"}:{}}>
                   {obj.title}
                 </li>
                 )
                }
                })
            }
           </ul>):(null)
        }
          </div>

          <div>
            <input type="button" value="All"  onClick={()=> setFilters(0)}/> &nbsp;
            <input type="button" value="Active" onClick={()=> setFilters(2)} /> &nbsp;
            <input type="button" value="Completed" onClick={()=> setFilters(3)}/> &nbsp;
            
              <input type="text" id="aa" onChange={(e)=>{setItem(e.target.value)}}/>
              <button onClick={()=>{
                  dispatch(addTodo(item))
                  document.getElementById('aa').value = ''  
              }}>Add Item</button>
          </div>

      </div>
    )
}