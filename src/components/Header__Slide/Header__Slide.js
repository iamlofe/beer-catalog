import React from "react";
import "./Header__Slide.scss";
import close_icon from "./images/close.png";
import home_icon from "./images/home.png";
import favotite_icon from "./images/star.png";

class Header__Slide extends React.Component {
  constructor(props) {
    super(props);
  }
  animationSlide() {}
  render() {
    return (
      <div
        className="header-slide"
        style={{
          width: this.props.state ? "33%" : "0",
          height: this.props.state ? "100%" : "0",
          boxShadow: this.props.state ? "0px 0px 0px 2px #919191" : "none"
        }}
      >
        <div className="header-slide__content">
          <div className="header-slide__header">
            {/* <div className="header-slide__name">Beer catalog</div> */}

            <img
              src={close_icon}
              alt=""
              className="header-slide__iconclose"
              onClick={this.props.click}
            />
          </div>
          <div className="header-slide__content__body">
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

export default Header__Slide;
