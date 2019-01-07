import React, { Component } from "react";

import Home from "./Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" render={props => <Home />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
