import { useSelector } from "react-redux"

function CounterDisplay() {
  const counter = useSelector((state)=>{
      return state.counterReducer.counter;
  })  
  return (
      <div>

          Counter = {counter} <br/> 
          Counter Display
      </div>
    );
  }
  
  export default CounterDisplay;
  