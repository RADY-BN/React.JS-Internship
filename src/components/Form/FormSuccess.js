import React from "react";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <div className="form-success">We have recived your request!</div>
      <img src= {require('../../images/svg-8.svg').default }alt="sucess" className="form-img-2" />
    </div>
  );
};

export default FormSuccess;
