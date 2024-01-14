import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM, ADD_ITEM } from "./actions";
import { data } from "../../data";

const reducer = (state, action) => {
  console.log("Previous State", state);
  console.log("action", action);

  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }

  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );

    return { ...state, people: newPeople };
  }

  if (action.type === ADD_ITEM) {
    let newPeople = [...state.people, action.payload];

    return { ...state, people: newPeople };
  }

  // throw error if no matching action type
  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
