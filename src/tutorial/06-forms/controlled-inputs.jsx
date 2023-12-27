import React from "react";

const ControlledInputs = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, age);
    // Reset the form fields
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="form-input"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input
          type="text"
          id="age"
          name="age"
          className="form-input"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <button type="submit" className="btn btn-block">
        add person
      </button>
    </form>
  );
};
export default ControlledInputs;
