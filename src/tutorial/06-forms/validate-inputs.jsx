import React, { useState } from "react";

const ValidateInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // State variables for validation messages
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ageError, setAgeError] = useState("");

  // State variable for overall form validity
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleBlur = (field) => () => {
    switch (field) {
      case "name":
        if (!name.trim()) {
          setNameError("Name is required");
        } else {
          setNameError("");
        }
        break;
      case "email":
        if (!email.trim()) {
          setEmailError("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          setEmailError("Invalid email format");
        } else {
          setEmailError("");
        }
        break;
      case "age":
        if (!age.trim()) {
          setAgeError("Age is required");
        } else if (isNaN(age) || parseInt(age) <= 0) {
          setAgeError("Invalid age");
        } else {
          setAgeError("");
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset error messages
    setNameError("");
    setEmailError("");
    setAgeError("");

    // Validation logic
    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    if (!age.trim()) {
      setAgeError("Age is required");
      isValid = false;
    } else if (isNaN(age) || parseInt(age) <= 0) {
      setAgeError("Invalid age");
      isValid = false;
    }

    // If all validations pass, proceed with form submission
    if (isValid) {
      setIsFormValid(true);

      // You can add your logic here to handle the form data
      console.log("Form submitted:", { name, email, age });

      // Clear form fields after submission if needed
      setName("");
      setEmail("");
      setAge("");
      setIsFormValid(false);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Validate Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          value={name}
          onChange={handleNameChange}
          onBlur={handleBlur("name")}
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
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="form-input"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleBlur("email")}
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
          Age
        </label>
        <input
          type="text"
          id="age"
          name="age"
          className="form-input"
          value={age}
          onChange={handleAgeChange}
          onBlur={handleBlur("age")}
        />
        <div
          className="error-message"
          style={{ color: "#ff0000", fontSize: "14px" }}
        >
          {ageError}
        </div>
      </div>
      <button type="submit" className="btn btn-block">
        Add Person
      </button>
    </form>
  );
};

export default ValidateInputs;
