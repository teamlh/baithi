import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/HomePage"
import Page from "./Component/Page"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page" component={Page} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
