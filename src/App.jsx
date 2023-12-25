import "./App.css";
import ErrorExample from "./tutorial/01-useState/errorExample";
import UseState from "./tutorial/01-useState/useStateBasics";
import UseStateArray from "./tutorial/01-useState/useStateArray";
import UseStateObject from "./tutorial/01-useState/useStateObject";
import UseStateGotcha from "./tutorial/01-useState/useStateGotcha";
import UseEffectBasics from "./tutorial/02-useEffect/useEffectBasics";
import MultipleEffects from "./tutorial/02-useEffect/multipleEffects";
import FetchData from "./tutorial/02-useEffect/fetch-data";
import MultipleReturnsBasics from "./tutorial/03-conditional-endering/multiple-returns-basics";
import MultipleReturnsFetchData from "./tutorial/03-conditional-endering/multiple-returns-fetch-data";
import HooksRulesExample from "./tutorial/03-conditional-endering/hooks-rule";
import ShortCircuitOverview from "./tutorial/03-conditional-endering/short-circuit-overview";
import ShortCircuitExamples from "./tutorial/03-conditional-endering/short-circuit-examples";
import ToggleChallenge from "./tutorial/03-conditional-endering/toggle-challenge";
import UserChallenge from "./tutorial/03-conditional-endering/user-challenge";
import UseRef from "./tutorial/07-useRef/useRef-basics";

function App() {
  return (
    <div className="container">
      {/* <ErrorExample /> */}
      {/* <UseState /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateGotcha /> */}
      {/* <UseEffectBasics /> */}
      {/* <MultipleEffects /> */}
      {/* <FetchData /> */}
      {/* <MultipleReturnsBasics /> */}
      {/* <MultipleReturnsFetchData /> */}
      {/* <HooksRulesExample /> */}
      {/* <ShortCircuitOverview /> */}
      {/* <ShortCircuitExamples /> */}
      {/* <ToggleChallenge /> */}
      <UserChallenge />
    </div>
  );
}

export default App;
