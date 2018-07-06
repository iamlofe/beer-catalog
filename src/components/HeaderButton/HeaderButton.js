import React from "react";
import "./HeaderButton.scss";

class HeaderButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header-button" onClick={this.props.click}>
        <div className="header-button__icon" />
        <div className="header-button__icon" />
        <div className="header-button__icon" />
      </div>
    );
  }
}

export default HeaderButton;
