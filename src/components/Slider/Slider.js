import React from "react";
import { defaultCipherList } from "constants";
import "./Slider.scss";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      value: 0
    };
  }

  render() {
    return (
      <div className="block-filter">
        <div className="block-filter__input">
          <div className="block-filter__cursor" />
          <div className="block-filter__line" />
          <div className="block-filter__line--active" />
        </div>
      </div>
    );
  }
}

export default Slider;
