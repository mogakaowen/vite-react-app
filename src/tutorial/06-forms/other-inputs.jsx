import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e) => {
    console.log("Checkbox:", e.target.checked);
    setShipping(e.target.checked);
  };

  const handleFramework = (e) => {
    console.log("Framework:", e.target.value);
    setFramework(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Shipping:", shipping, "Framework:", framework);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            className="form-control"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((framework) => {
              return (
                <option value={framework} key={framework}>
                  {framework}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
