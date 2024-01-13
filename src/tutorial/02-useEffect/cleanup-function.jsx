import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <ShowHide />}
    </div>
  );
};

const ShowHide = () => {
  useEffect(() => {
    console.log("Hmm, this is interesting");
    const intId = setInterval(() => {
      console.log("Hello from interval, I am still here");
    }, 1000); // seInterval runs every 1 second even if the component is hidden

    return () => {
      console.log("Cleanup function");
      clearInterval(intId); // this will clear the interval when the component is hidden
    };
  }, []);

  useEffect(() => {
    const someFunc = () => {};
    window.addEventListener("scroll", someFunc); // this will add an event listener when the component is shown
    return () => {
      window.removeEventListener("scroll", someFunc); // this will remove the event listener when the component is hidden
    };
  }, []);

  return (
    <div>
      <h2>Oops! You found me</h2>
    </div>
  );
};

export default CleanupFunction;
