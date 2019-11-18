import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";
import "./App.css";
import { tsPropertySignature } from "@babel/types";

//use react router to create routes within the page for different things
//maybe conside making this a class for state? or maybe make index a class? need state for which page of countries you're on

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      countries: []
    };
  }

  handlePageChangeNext(buttonEl) {
    //takes a button element (probably an input) reference and if the next time it will be pressed shouldnt happen (ie there is no next page) then it disables it
  }

  handlePageChangePrev(buttonEl) {
    //takes a button element (probably an input) reference and if the next time it will be pressed shouldnt happen (ie the page number is 1) then it disables it
  }

  render() {
    return (
      <div className="App">
        <header>
          <Link to="/">
            <h1>Global Temperatures</h1>
          </Link>
          <nav>
            <Link to="/add">
              <h2>Add</h2>
            </Link>
            <Link to="/update">
              <h2>Update</h2>
            </Link>
            <Link to="/delete">
              <h2>Delete</h2>
            </Link>
          </nav>
        </header>

        <main>
          <Route
            path="/"
            exact
            render={() => {
              <Home
                countries={this.state.countries}
                page={this.state.page}
                onPageChangeNext={this.handlePageChangeNext}
                onPageChangePrev={this.handlePageChangePrev}
              />;
            }}
          />
          <Route
            path="/country/:country"
            render={routerProps => {
              <Country {...routerProps} />;
            }}
          />
          <Route
            path="/add" //TODO: change all the indexs for these into their respective component names. Create an index like the ones displayed here within the components
            render={() => {
              <Index
                countries={this.state.countries}
                type="add"
                onPageChangeNext={this.handlePageChangeNext}
                onPageChangePrev={this.handlePageChangePrev}
              />;
            }}
          />
          <Route
            path="/update"
            render={() => {
              <Index
                countries={this.state.countries}
                type="update"
                onPageChangeNext={this.handlePageChangeNext}
                onPageChangePrev={this.handlePageChangePrev}
              />;
            }}
          />
          <Route
            path="/delete"
            render={() => {
              <Index
                countries={this.state.countries}
                type="delete"
                onPageChangeNext={this.handlePageChangeNext}
                onPageChangePrev={this.handlePageChangePrev}
              />;
            }}
          />
        </main>
      </div>
    );
  }
}

export default App;
