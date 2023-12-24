import "./App.css";
import ErrorExample from "./tutorial/01-useState/errorExample";
import UseState from "./tutorial/01-useState/useStateBasics";
import UseStateArray from "./tutorial/01-useState/useStateArray";
import UseStateObject from "./tutorial/01-useState/useStateObject";
import UseStateGotcha from "./tutorial/01-useState/useStateGotcha";
import CodeExample from "./tutorial/02-useEffect/exampleCode";
import UseRef from "./tutorial/07-useRef/useRef-basics";

function App() {
  return (
    <div className="container">
      {/* <ErrorExample /> */}
      {/* <UseState /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateGotcha /> */}
      <CodeExample />
    </div>
  );
}

export default App;
