import { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Initial Title");
  const handleClick = () => {
    // if (text === "Random Title") {
    //   setText("This is a new Title");
    // } else {
    //   setText("Random Title");
    // }
    if (text === "Random Title") {
      setText("This is a new Title");
    } else if (text === "This is a new Title") {
      setText("This is the newest title");
    } else if (text === "This is the newest title") {
      setText("Just kidding, This is the actual newest title");
    } else {
      setText("Random Title");
    }
  };

  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  console.log("Count:", count);

  return (
    <div>
      <h1>UseState To Solve Error Example</h1>
      <div>
        <h4>
          You clicked<strong> {count} </strong>times
        </h4>
        <button className="btn" type="button" onClick={handleCount}>
          Increase
        </button>
      </div>
      <div>
        <h2>{text}</h2>
        <button className="btn" type="button" onClick={handleClick}>
          Change Title
        </button>
      </div>
    </div>
  );
};

export default UseStateBasics;
