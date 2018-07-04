import React, { Component } from "react";
import logo from "./logo.svg";
import Header__Button from "./components/Header__Button/Header__Button";
import "./theme.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header__Button />
      </div>
    );
  }
}

export default App;
