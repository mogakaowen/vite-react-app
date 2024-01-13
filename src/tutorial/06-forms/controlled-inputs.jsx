import React from "react";

const ControlledInputs = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [age, setAge] = React.useState("");

  // State variables for validation messages
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [ageError, setAgeError] = React.useState("");

  // State variable for overall form validity
  const [isFormValid, setIsFormValid] = React.useState(false);

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
    // Validation logic
    if (!name.trim()) {
      setNameError("Name is required");
      setIsFormValid(false);
    } else {
      setNameError("");
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      setIsFormValid(false);
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      setIsFormValid(false);
    } else {
      setEmailError("");
    }

    if (!age.trim()) {
      setAgeError("Age is required");
      setIsFormValid(false);
    } else if (isNaN(age) || parseInt(age) <= 0) {
      setAgeError("Invalid age");
      setIsFormValid(false);
    } else {
      setAgeError("");
    }

    // If all validations pass, proceed with form submission
    if (name && email && age) {
      setIsFormValid(true);

      // You can add your logic here to handle the form data
      console.log("Form submitted:", { name, email, age });

      // Clear form fields after submission if needed
      setName("");
      setEmail("");
      setAge("");
      setIsFormValid(false);
    }
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
        <div
          className="error-message"
          style={{ color: "#ff0000", fontSize: "14px" }}
        >
          {nameError}
        </div>
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
        <div
          className="error-message"
          style={{ color: "#ff0000", fontSize: "14px" }}
        >
          {emailError}
        </div>
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
        <div
          className="error-message"
          style={{ color: "#ff0000", fontSize: "14px" }}
        >
          {ageError}
        </div>
      </div>
      <button type="submit" className="btn btn-block">
        add person
      </button>
    </form>
  );
};
export default ControlledInputs;
