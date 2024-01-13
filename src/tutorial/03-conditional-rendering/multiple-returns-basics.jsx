import { useEffect, useState } from "react";
import { data } from "../../data";

const MultipleReturnsBasics = () => {
  const [people, setPeople] = useState([]);

  // while fetching data
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // done fetching data
      setIsLoading(false);
      setPeople(data);
    }, 3000);
  }, []);

  // can return entire app
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>List of Persons</h2>
      <ul>
        {people.map((person, index) => {
          const { id, name } = person;
          return (
            <li key={id}>
              <h4>
                <span>{index + 1}: </span>
                {name}
              </h4>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default MultipleReturnsBasics;
