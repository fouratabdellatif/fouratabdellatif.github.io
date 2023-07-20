import "./App.css";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter as Router } from "react-router-dom";

import ReactGA from 'react-ga';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    ReactGA.initialize('UA-200591723-1');
    // To Report Page View 
    ReactGA.pageview('/');
  }, [])

  useEffect(() => {
   console.log(window.location.pathname)
  })
  
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;