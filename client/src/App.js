import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

import SimulatorForm from "./components/SimulatorForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimulatorForm/>
      </div>
    );
  }
}

export default App;
