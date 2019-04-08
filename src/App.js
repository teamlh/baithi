import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/HomePage"
import SignInPage from "./Component/SignInPage"
import SignUpPage from "./Component/SignUpPage"
import TotalQ from "./Component/TotalQuestion"
import Details from "./Component/DetailQuestion"
import Profile from "./Component/Profile"
import Rule from "./Component/Rule"
import Add from "./Component/AddExam"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/total" component={TotalQ} />
            <Route path={`/detail/:ID`} component={Details} />
            <Route path="/profile" component={Profile} />
            <Route path="/rule" component={Rule} />
            <Route path="/add" component={Add} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
