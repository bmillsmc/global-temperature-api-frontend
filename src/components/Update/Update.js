import React, { Component } from "react";
import "./Update.css";

class Update extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    //handles the update call to the api. make the text input's value a state so you can retrieve it here or something

    let body = evt.target.parentNode.childNodes[1].value;
    fetch(this.props.url + "/country/" + this.props.match.params.country, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
