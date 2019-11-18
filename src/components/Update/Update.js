import React, { Component } from "react";
import "./Update.css";

class Update extends Component {
  handleSubmit(evt) {
    //handles the update call to the api. make the text input's value a state so you can retrieve it here or something
  }

  render() {
    return (
      <div className="update-div">
        <h2>Update</h2>
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
