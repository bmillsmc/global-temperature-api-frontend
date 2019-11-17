import React from "react";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";
import "./App.css";
import { tsPropertySignature } from "@babel/types";

//use react router to create routes within the page for different things
//maybe conside making this a class for state? or maybe make index a class? need state for which page of countries you're on

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h1>Global Temperatures</h1>
        </Link>
      </nav>
      <main>
        <Route
          path="/"
          exact
          render={() => {
            <Home countries={props.countries} />;
          }}
        />
        <Route
          path="/:country"
          render={routerProps => {
            <Country {...routerProps} countries={props.countries} />;
          }}
        />
      </main>
    </div>
  );
}

export default App;
