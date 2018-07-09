import React, { Component } from "react";
import logo from "./logo.svg";
import HeaderButton from "./components/HeaderButton/HeaderButton";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import HeaderSlide from "./components/HeaderSlide/HeaderSlide";
import ContentBox from "./components/ContentBox/ContentBox";
import FormSearch from "./components/FormSearch/FormSearch";
import Slider from "./components/Slider/Slider";
import { Col, Row, Grid } from "react-bootstrap";
import "./theme.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stateOfButton: false,
      massOfBeers: [1111111111, 1111, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      textOfSearch: ""
    };
  }
  changeFormSearch(e) {
    this.setState({
      textOfSearch: e.target.value
    });
    console.log(this.state.textOfSearch);
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
        <header>
          <div className="header">
            <HeaderSlide
              click={this.changeStateOfButton.bind(this)}
              state={this.state.stateOfButton}
            />

            <div className="header__block">
              <HeaderButton click={this.changeStateOfButton.bind(this)} />
              <HeaderLogo />
            </div>
          </div>
        </header>
        <main>
          <div className="main">
            <FormSearch
              change={this.changeFormSearch.bind(this)}
              textOfSearch={this.state.textOfSearch}
            />
            <ContentBox massOfBeers={this.state.massOfBeers} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
