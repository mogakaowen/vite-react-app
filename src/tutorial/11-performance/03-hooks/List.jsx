import Person from "./Person";
import { memo } from "react";

const List = ({ people, removePerson }) => {
  console.log("render List");

  return (
    <div>
      {people.map((person) => {
        return (
          <Person key={person.id} {...person} removePerson={removePerson} />
        );
      })}
    </div>
  );
};
export default memo(List);
