import React from "react";
import "./FormSearch.scss";
import slider from "react-input-slider";

class FormSearch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="form-search">
        <input
          type="text"
          className="form-search__input"
          value={this.props.textOfSearch}
          onChange={this.props.change}
        />
        <div className="form-search__search" />
      </div>
    );
  }
}

export default FormSearch;
