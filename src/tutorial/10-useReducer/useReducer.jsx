import { useReducer, useState } from "react";
import { data } from "../../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM, ADD_ITEM } from "./actions";
import reducer from "./reducer";

const defaultState = {
  people: data,
  isLoading: true,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState("");

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({
        type: ADD_ITEM,
        payload: { id: new Date().getTime(), name },
      });
      setName("");
    } else {
      alert("Please enter a name");
      return;
    }
  };

  console.log("Current State:", state);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <h3>List of persons</h3>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset list
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear list
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
