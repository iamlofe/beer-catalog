import React from "react";
import "./Header__Button.scss";
import Header__Slide from "../Header__Slide/Header__Slide";

class Header__Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header__button" onClick={this.props.click}>
        <div className="header__button__icon" />
        <div className="header__button__icon" />
        <div className="header__button__icon" />
      </div>
    );
  }
}

export default Header__Button;
