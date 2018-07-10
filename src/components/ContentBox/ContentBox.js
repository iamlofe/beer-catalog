import React from 'react';
import './ContentBox.scss';
import {Col, Row, Grid, Button} from 'react-bootstrap';

class ContentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
  }

  updateDimensions() {
    this.setState({width: window.innerWidth});
    //////////////////
    /////////////////
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
  render() {
    return (
      <div className="content-box">
        {this.props.massOfBeers.map((element, index, mass) => {
          console.log(window.innerWidth);

          return (
            <div className="content-box__main" key={index}>
              <div className="content-box__element">
                <div className="content-box__header">
                  <div className="content-box__image" />
                </div>
                <div className="content-box__content">
                  <div className="content-box__title">Beer Jateskiy gus</div>
                  <div className="content-box__description">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  </div>
                  <div className="conyent-box__buttons">
                    <a href="#">Open</a>
                    <div>Add to favorite</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ContentBox;
