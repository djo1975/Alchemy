// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Book from "./components/Book";
import InternetSchool from "./components/ School";
import IndividualMandalaInterpretation from "./components/Mandala";
import JourneyWithStones from "./components/Journey";
import InitiationAndJourneyWithStones from "./components/Initiations";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/school" element={<InternetSchool />} />
        <Route path="/mandala" element={<IndividualMandalaInterpretation />} />
        <Route path="/journey" element={<JourneyWithStones />} />
        <Route path="/initiations" element={<InitiationAndJourneyWithStones />} />
        <Route path="/about" element={<About />} />
\
        </Routes>
    </Router>
  );
}

export default App;
