import React,{useEffect} from "react";
import ScrollToTop from "../components/ScrollToTop";
import Signin from "../components/Signin";


const SigninPage = () => {
  useEffect(() => {
    document.title = "Join The Club";
  }, []);
  return (
    <>
      <ScrollToTop />
      <Signin />
    </>
  );
};

export default SigninPage;
