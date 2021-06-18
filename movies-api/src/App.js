import React from "react";
import "./App.css";
import Routes from "./Components/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./Components/SearchBar/SearchBar";
import Home from "./Components/Home/Home";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
      <Home />
    </div>
  );
};

export default App;
