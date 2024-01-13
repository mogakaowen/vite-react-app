import { data } from "../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const [isData, setIsData] = React.useState(true);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);

    // Find the person to be removed
    const personToRemove = people.find((person) => person.id === id);
    console.log("Person removed:", personToRemove);

    // If the person to be removed is the last person in the list, then set isData to false
    if (newPeople.length === 0) {
      setIsData(false);
    }
  };

  const restoreList = () => {
    setPeople(data);
    setIsData(true);
  };

  const clearList = () => {
    setPeople([]);
    setIsData(false);
  };

  return (
    <>
      <h1>UseState Array Example</h1>
      <h2>List of Persons</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              className="btn"
              type="button"
              onClick={() => removeItem(id)}
            >
              Remove Person
            </button>
          </div>
        );
      })}

      {isData ? (
        <div>
          <button className="btn" type="button" onClick={clearList}>
            Clear List
          </button>
        </div>
      ) : (
        <div>
          <button className="btn" type="button" onClick={restoreList}>
            Restore List
          </button>
        </div>
      )}
    </>
  );
};

export default UseStateArray;
