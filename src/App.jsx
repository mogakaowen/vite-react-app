import "./App.css";
import ErrorExample from "./tutorial/01-useState/errorExample";
import UseState from "./tutorial/01-useState/useStateBasics";
import UseStateArray from "./tutorial/01-useState/useStateArray";
import UseStateObject from "./tutorial/01-useState/useStateObject";
import UseStateGotcha from "./tutorial/01-useState/useStateGotcha";
import UseEffectBasics from "./tutorial/02-useEffect/useEffectBasics";
import MultipleEffects from "./tutorial/02-useEffect/multipleEffects";
import FetchData from "./tutorial/02-useEffect/fetch-data";
import CleanupFunction from "./tutorial/02-useEffect/cleanup-function";
import MultipleReturnsBasics from "./tutorial/03-conditional-endering/multiple-returns-basics";
import MultipleReturnsFetchData from "./tutorial/03-conditional-endering/multiple-returns-fetch-data";
import HooksRulesExample from "./tutorial/03-conditional-endering/hooks-rule";
import ShortCircuitOverview from "./tutorial/03-conditional-endering/short-circuit-overview";
import ShortCircuitExamples from "./tutorial/03-conditional-endering/short-circuit-examples";
import ToggleChallenge from "./tutorial/03-conditional-endering/toggle-challenge";
import UserChallenge from "./tutorial/03-conditional-endering/user-challenge";
import Navbar from "./tutorial/04-project-structure/NavBar";
import { Home, About } from "./tutorial/04-project-structure/Pages";
import IndexExample from "./tutorial/04-project-structure/Example";
import List from "./tutorial/05-leverage-javascript/List";
import ControlledInputs from "./tutorial/06-forms/controlled-inputs";
import UserChallengeForms from "./tutorial/06-forms/user-challenge";
import MultipleInputsForms from "./tutorial/06-forms/multiple-inputs";
import OtherInputs from "./tutorial/06-forms/other-inputs";
import UncontrolledInputs from "./tutorial/06-forms/form-data";
import UseRef from "./tutorial/07-useRef/useRef-basics";
import ToggleExample from "./tutorial/08-custom-hooks/toggle";
import FetchDataCustomHooks from "./tutorial/08-custom-hooks/fetch-data";
import NavBarContext from "./tutorial/09-context-api/context/NavBar";
import NavbarPropDrilling from "./tutorial/09-context-api/prop-drilling/NavBar";
import ReducerBasics from "./tutorial/10-useReducer/useReducer";
import LowerState from "./tutorial/11-performance/01-lower-state";
import LowerStateChallenge from "./tutorial/11-performance/02-lower-state-challenge";
import LowerStateHooks from "./tutorial/11-performance/03-hooks";

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
      {/* <CleanupFunction /> */}
      {/* <MultipleReturnsBasics /> */}
      {/* <MultipleReturnsFetchData /> */}
      {/* <HooksRulesExample /> */}
      {/* <ShortCircuitOverview /> */}
      {/* <ShortCircuitExamples /> */}
      {/* <ToggleChallenge /> */}
      {/* <UserChallenge /> */}
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <About /> */}
      {/* <IndexExample /> */}
      {/* <List /> */}
      {/* <ControlledInputs /> */}
      {/* <UserChallengeForms /> */}
      {/* <MultipleInputsForms /> */}
      {/* <OtherInputs /> */}
      {/* <UncontrolledInputs /> */}
      {/* <UseRef /> */}
      {/* <ToggleExample /> */}
      {/* <FetchDataCustomHooks /> */}
      {/* <NavBarContext /> */}
      {/* <NavbarPropDrilling /> */}
      {/* <ReducerBasics /> */}
      {/* <LowerState /> */}
      {/* <LowerStateChallenge /> */}
      <LowerStateHooks />
    </div>
  );
}

export default App;
