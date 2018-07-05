import React, { Component } from "react";
import logo from "./logo.svg";
import Header__Button from "./components/Header__Button/Header__Button";
import Header__Logo from "./components/Header__Logo/Header__Logo";
import Header__Slide from "./components/Header__Slide/Header__Slide";
import "./theme.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stateOfButton: false
    };
  }
  changeStateOfButton() {
    if (!this.state.stateOfButton) {
      this.setState({
        stateOfButton: true
      });
    } else {
      this.setState({
        stateOfButton: false
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <Header__Slide
            click={this.changeStateOfButton.bind(this)}
            state={this.state.stateOfButton}
          />
          <Header__Button click={this.changeStateOfButton.bind(this)} />
          <Header__Logo />
        </header>
      </div>
    );
  }
}

export default App;
