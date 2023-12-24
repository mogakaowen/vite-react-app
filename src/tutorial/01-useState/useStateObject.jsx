import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "John",
    age: 24,
    hobby: "Football",
  });

  const displayPerson = () => {
    setPerson({ ...person, name: "Peter", hobby: "Basketball" });
  }; // overwrites the name and hobby properties of the person object but keeps the age property

  return (
    <>
      <h1>UseState Object</h1>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>Enjoys: {person.hobby}</h2>
      <button className="btn" onClick={displayPerson}>
        Show Peter
      </button>
    </>
  );
};

export default UseStateObject;
