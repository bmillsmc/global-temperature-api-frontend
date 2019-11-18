import React, { Component } from "react";
import "./Create.css";

class Create extends Component {
  handleSubmit() {
    //handles when the submit button is pressed, converts the input into json and sends a create request to the api
  }

  render() {
    return (
      <div className="create-div">
        <h2>Add</h2>
        <input type="text" placeholder="JSON goes here..." />
        <input type="submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default Create;
