import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Update.css";

class Update extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(evt) {
    //handles the update call to the api. make the text input's value a state so you can retrieve it here or something
  }

  render() {
    return (
      <div className="update-div">
        <input
          type="text"
          placeholder={`changes to ${this.props.match.params.country} go here...`}
        />
        <input type="submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default Update;
