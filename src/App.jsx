import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Quote from "./component/Quote";
function App() {
  return (
    <Router>
      <Navbar />
      <Quote />
    </Router>
  );
}
export default App;