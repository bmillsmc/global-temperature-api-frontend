import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import { tsPropertySignature } from "@babel/types";

//use react router to create routes within the page for different things
//maybe conside making this a class for state? or maybe make index a class? need state for which page of countries you're on

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      countries: {},
      url: "https://global-temperature-api.herokuapp.com/country"
    };

    this.handlePageChangePrev = this.handlePageChangePrev.bind(this);
    this.handlePageChangeNext = this.handlePageChangeNext.bind(this);
  }

  componentDidMount() {
    //fetches the first page of countries, which is contained within an object (to access the data do countries.data[0].country for example)
    fetch(this.state.url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          countries: res
        });
      })
      .catch(err => console.log(err));
  }

  handlePageChangeNext(buttonEl) {
    //TODO: merge these into one method, handlePageChange(), that checks for the value of buttons text, if its "prev" (use tolowercase) then it subtract and does what the prev button is supposed to do ie disable and if its "next" then vice versa
    //takes a button element (probably an input) reference and if the next time it will be pressed shouldnt happen (ie there is no next page) then it disables it. also increments the page and fetches the next 10 countries into state
    this.setState({
      page: this.state.page++
    });
    fetch(this.state.url + "?page=" + this.state.page)
      .then(res => res.json())
      .then(res => {
        this.setState({
          countries: res
        });
        if (this.state.countries.has_more === false) {
          buttonEl.setAttribute("disabled", "disabled");
        }
        buttonEl.parentNode.childNodes[0].removeAttribute("disabled");
      })
      .catch(err => console.log(err));
  }

  handlePageChangePrev(buttonEl) {
    //takes a button element (probably an input) reference and if the next time it will be pressed shouldnt happen (ie the page number is 1) then it disables it
    this.setState({
      page: this.state.page--
    });
    fetch(this.state.url + "?page=" + this.state.page)
      .then(res => res.json())
      .then(res => {
        this.setState({
          countries: res
        });
        if (this.state.page === 1) {
          buttonEl.setAttribute("disabled", "disabled");
        }
        buttonEl.parentNode.childNodes[
          buttonEl.parentNode.childNodes.length - 1
        ].removeAttribute("disabled");
      })
      .catch(err => console.log(err));
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
              <Country {...routerProps} countries={this.state.countries} />;
            }}
          />
          <Route
            path="/add"
            render={() => {
              <Create />;
            }}
          />
          <Route
            path="/add/:country"
            render={() => {
              <Redirect to="/add" />;
            }}
          />
          <Route
            path="/update"
            render={() => {
              <Index
                countries={this.state.countries}
                type="update"
                page={this.state.page}
                onPageChangeNext={this.handlePageChangeNext}
                onPageChangePrev={this.handlePageChangePrev}
              />;
            }}
          />
          <Route
            path="/update/:country"
            render={() => {
              <Update {...routerProps} countries={this.state.countries} />;
            }}
          />
          <Route
            path="/delete"
            render={() => {
              <Index
                countries={this.state.countries}
                type="delete"
                page={this.state.page}
                onPageChangeNext={this.handlePageChangeNext}
                onPageChangePrev={this.handlePageChangePrev}
              />;
            }}
          />
          <Route
            path="/delete/:country"
            render={() => {
              <Delete {...routerProps} countries={this.state.countries} />;
            }}
          />
        </main>
      </div>
    );
  }
}

export default App;
