import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import About from "./components/pages/About.js";
import Alert from "./components/layout/Alert";
import "./App.css";
import GitHubState from './context/github/GithubState'
import AlertState from './context/alerts/alertState'

const App = () => {
  const [alert, setAlert] = useState(null);
  //Set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };
    return (
      <GitHubState>
        <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      setAlert={showAlert}
                    />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                component={User}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
      </GitHubState>
    );
  }


export default App;
