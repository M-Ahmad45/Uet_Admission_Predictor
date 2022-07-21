import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Quote from "./component/Quote";
import Description from "./component/Description";

function App() {
  return (
    <>
     
      <Router>
        <Navbar />
        <Quote />
        {/* <Description /> */}
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
