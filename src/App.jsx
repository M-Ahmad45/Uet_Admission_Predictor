import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Input from "./component/Input";
function App() {
  return (
    <Router>
      <Navbar />
      <Input/>
    </Router>
  );
}
export default App;