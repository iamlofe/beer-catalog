import React from "react";
import { defaultCipherList } from "constants";
import "./Slider.scss";

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }
  click(e) {
    let value = e.target.value;
    let max = this.props.max;
    let currentValue = (value * 100) / max;

    e.target.style.background = `linear-gradient(to right, #5B8EC2 0%, #5B8EC2 ${currentValue}%,#C1C1C1 ${currentValue}%,#C1C1C1 100%)`;

    this.props.onChangeValueOfSlider(value, e.target);
  }

  render() {
    return (
      <div className="main__filterAlcohol">
        <div className="main__title">{this.props.title}</div>
        <div className="main__value">
          <div>{this.props.value}</div>
          <input
            name={this.props.name}
            value={this.props.value}
            step={0.1}
            type="range"
            className="block-filter__input"
            onInput={this.click.bind(this)}
            max={this.props.max}
            step={this.props.step}
          />
        </div>
      </div>
    );
  }
}

export default Slider;
