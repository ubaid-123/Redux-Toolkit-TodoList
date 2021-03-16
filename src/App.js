import Counter from "./components/Counter";
import CounterDisplay from "./components/CounterDisplay";
import { TodoDisplay } from "./components/TodoDisplay";

function App() {
  return (
    <div>
        <Counter/>
        <CounterDisplay/>
        <br/><br/>
        <TodoDisplay/>
    </div>
  );
}

export default App;
