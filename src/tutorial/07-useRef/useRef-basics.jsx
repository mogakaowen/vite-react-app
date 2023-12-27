import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false); // useRef can be used to keep track of whether the component is mounted or not

  useEffect(() => {
    console.log("refContainer:", refContainer);
    console.log("refContainer.current:", refContainer.current);
    refContainer.current.focus(); // focus on the input field
  });

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("Re-render");
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log("name:", name);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            ref={refContainer}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
