import React from "react";
import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SigninPage from "./pages/Signin";

import SignUpPage from "./pages/Signup";
import { PageObjOne, PageObjTwo,PageObjThree } from "./components/Page/Data";
import Page from "./components/Page/Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
        <Route path="/s1" render={() => <Page {...PageObjOne} />} exact />
        <Route path="/s2" render={() => <Page {...PageObjTwo} />} exact />
        <Route path="/s3" render={() => <Page {...PageObjThree} />} exact />
      </Switch>
    </Router>
  );
}

export default App;
