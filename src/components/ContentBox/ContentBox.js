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
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
  render() {
    return (
      <div className="content-box">
        {/* <Row> */}
        {this.props.massOfBeers.map((element, index, mass) => {
          console.log(window.innerWidth);

          return (
            //   <Col sm={4} md={4} lg={3} style={{}}>
            <div className="content-box__main">
              <div className="content-box__element" key={index}>
                <div className="content-box__header">he</div>
                <div className="content-box__content">co</div>
              </div>
            </div>

            //   </Col>
          );
        })}
        {/* </Row> */}
      </div>
    );
  }
}

export default ContentBox;
// return (
//   <div className="content-box__element" key={index}>
//     <div className="content-box__header">he</div>
//     <div className="content-box__content">co</div>
//   </div>
// );
