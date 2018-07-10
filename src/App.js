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
      massOfBeers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      textOfSearch: "",
      valueAlcohol: 0,
      valueIBU: 0,
      valueEBC: 0
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
  onChangeValueOfSlider(value, e) {
    switch (e.attributes.name.nodeValue) {
      case "0":
        this.setState({
          valueAlcohol: value
        });
        break;
      case "1":
        this.setState({
          valueIBU: value
        });
        break;
      case "2":
        this.setState({
          valueEBC: value
        });
        break;
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
            <div className="main__filter">
              <Slider
                max={10}
                step={0.1}
                name={0}
                value={this.state.valueAlcohol}
                onChangeValueOfSlider={this.onChangeValueOfSlider.bind(this)}
                title={"Alcohol by value"}
              />
              <Slider
                name={1}
                title={"International Bitterness Units"}
                value={this.state.valueIBU}
                onChangeValueOfSlider={this.onChangeValueOfSlider.bind(this)}
                max={200}
              />
              <Slider
                name={2}
                title={"Color by EBC"}
                value={this.state.valueEBC}
                onChangeValueOfSlider={this.onChangeValueOfSlider.bind(this)}
                max={10}
              />
            </div>
            <ContentBox massOfBeers={this.state.massOfBeers} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
