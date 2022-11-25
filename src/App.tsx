import { ContadorReducer } from "./component/ContadorReducer";
import Counter from "./component/Counter";
import { TimerPadre } from "./component/TimerPadre";
import Usuario from "./component/Usuario";


function App() {
  return (
    <>
    <h1>React + Typescript..!</h1>
    <hr/>

    <h1>useState</h1>
    <Counter/>
    <hr/>

    
    <Usuario/>
    <hr/>

    <h1>useEffect - useRef</h1>
    <TimerPadre/>
    <hr/>

    <h1>useReducer</h1>
    <ContadorReducer/>
    <br/>
     
    </>
  );
}

export default App;
