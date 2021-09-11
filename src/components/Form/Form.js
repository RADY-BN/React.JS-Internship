import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import "./Form.css";
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className='container'>
      <div className="form-container">
        <a href="/" className="close-btn">
          x
        </a>
        <div className="form-content-left">
          <img
            src={require("../../images/svg-9.svg").default}
            alt="spaceship"
            className="form-img"
          />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </div>
  );
};

export default Form;
