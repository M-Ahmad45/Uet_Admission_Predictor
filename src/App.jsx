import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Contact from "./component/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
