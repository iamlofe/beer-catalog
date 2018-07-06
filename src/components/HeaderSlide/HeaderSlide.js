import React from "react";
import "./HeaderSlide.scss";
import close_icon from "./images/close.png";
import home_icon from "./images/home.png";
import favotite_icon from "./images/star.png";

class HeaderSlide extends React.Component {
  constructor(props) {
    super(props);
  }
  animationSlide() {}
  render() {
    return (
      <div className={this.props.state ? "header-slide--open" : "header-slide"}>
        <div className="header-slide__content">
          <div className="header-slide__header">
            <img
              src={close_icon}
              alt=""
              className="header-slide__iconclose"
              onClick={this.props.click}
            />
          </div>
          <div className="header-slide__body">
            <div className="header-slide__items">
              <div className="header-slide__home">
                <div>
                  <img src={home_icon} alt="" />
                  <span>Home</span>
                </div>
              </div>
              <div className="header-slide__favorite">
                <div>
                  <img src={favotite_icon} alt="" />
                  <span>Favorite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderSlide;
