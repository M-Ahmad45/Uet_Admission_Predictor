import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Description from "./component/Description";
import Result from "./component/Result";

function App() {
  const description_text = "Calculate your admission probability based on a machine learning model trained with last 5 years of aggregate record"
  return (

    <Router>
      <Navbar />
      <Description text={description_text} link_text={"Lets Go"} link={""}/>
      <Result chance={75}></Result>
    </Router>
  );
}
export default App;