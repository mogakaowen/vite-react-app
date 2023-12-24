import React from "react";

const UseStateGotcha = () => {
  const [value, setValue] = React.useState(0);

  const handleClick = () => {
    setValue((previousValue) => {
      console.log("previousValue:", previousValue);
      const currentValue = previousValue + 1;
      console.log("currentValue:", currentValue);
      return currentValue;
    });
  };

  const handleClick2 = () => {
    setTimeout(() => {
      setValue((value) => {
        return value + 1;
      });
    }, 2000);
  };
  console.log("value:", value);

  return (
    <>
      <h1>UseState Gotcha</h1>
      <h2>{value}</h2>
      <button className="btn" onClick={handleClick2}>
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
