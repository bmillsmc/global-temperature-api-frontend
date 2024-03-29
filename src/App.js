import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Country from "./components/Country/Country";
import Index from "./components/Index/Index";
import Update from "./components/Update/Update";
import Delete from "./components/Delete/Delete";
import Create from "./components/Create/Create";

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

  async handlePageChangeNext(buttonEl) {
    //TODO: merge these into one method, handlePageChange(), that checks for the value of buttons text, if its "prev" (use tolowercase) then it subtract and does what the prev button is supposed to do ie disable and if its "next" then vice versa
    //takes a button element (probably an input) reference and if the next time it will be pressed shouldnt happen (ie there is no next page) then it disables it. also increments the page and fetches the next 10 countries into state
    let pageNum = this.state.page;
    await this.setState({
      page: pageNum + 1
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

  async handlePageChangePrev(buttonEl) {
    //takes a button element (probably an input) reference and if the next time it will be pressed shouldnt happen (ie the page number is 1) then it disables it
    let pageNum = this.state.page;
    await this.setState({
      page: pageNum - 1
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
              return (
                <Home
                  countries={this.state.countries}
                  page={this.state.page}
                  onPageChangeNext={this.handlePageChangeNext}
                  onPageChangePrev={this.handlePageChangePrev}
                />
              );
            }}
          />
          <Route
            path="/country/:country"
            render={routerProps => {
              return (
                <Country
                  {...routerProps}
                  countries={this.state.countries}
                  url={this.state.url}
                />
              );
            }}
          />
          <Route
            path="/add"
            render={() => {
              return <Create url={this.state.url} />;
            }}
            exact
          />
          <Route
            path="/add/:country"
            render={() => {
              return <Redirect to="/add" />;
            }}
          />
          <Route
            path="/update"
            exact
            render={() => {
              return (
                <Index
                  countries={this.state.countries}
                  type="update"
                  page={this.state.page}
                  onPageChangeNext={this.handlePageChangeNext}
                  onPageChangePrev={this.handlePageChangePrev}
                />
              );
            }}
          />
          <Route
            path="/update/:country"
            render={routerProps => {
              return (
                <Update
                  {...routerProps}
                  countries={this.state.countries}
                  url={this.state.url}
                />
              );
            }}
          />
          <Route
            path="/delete"
            exact
            render={() => {
              return (
                <Index
                  countries={this.state.countries}
                  type="delete"
                  page={this.state.page}
                  onPageChangeNext={this.handlePageChangeNext}
                  onPageChangePrev={this.handlePageChangePrev}
                />
              );
            }}
          />
          <Route
            path="/delete/:country"
            render={routerProps => {
              return (
                <Delete
                  {...routerProps}
                  countries={this.state.countries}
                  url={this.state.url}
                />
              );
            }}
          />
        </main>
      </div>
    );
  }
}

export default App;
