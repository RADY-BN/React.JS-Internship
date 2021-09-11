import React, { useEffect } from "react";
import Form from "../components/Form/Form";

const SignUpPage = () => {
  useEffect(() => {
    document.title = "Join The Club";
  }, []);

  return (
    <>
      <Form />
    </>
  );
};

export default SignUpPage;
