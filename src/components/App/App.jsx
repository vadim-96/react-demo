import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect,
} from 'react-router-dom';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';
import { SwapiServiceProvider } from '../SwapiServiceContext/SwapiServiceContext';
import { StarshipDetails } from '../SwComponents';
import {
  PeoplePage, PlanetsPage, StarshipsPage,
  LoginPage, SecretPage,
} from '../Pages';


import './App.css';

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false,
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService
        ? DummySwapiService : SwapiService;

      return {
        swapiService: new Service(),
      };
    });
  }

  render() {
    const { isLoggedIn, swapiService } = this.state;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet updateInterval={15000} />

              <Switch>
                <Route
                  path="/"
                  render={() => <h2>Welcome to StarDB!</h2>}
                  exact
                />
                <Route
                  path="/people/:id?"
                  render={() => (
                    <>
                      <h2>People!</h2>
                      <PeoplePage />
                    </>
                  )}
                />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                  )}
                />
                <Route
                  path="/secret"
                  render={() => (
                    <SecretPage isLoggedIn={isLoggedIn} />
                  )}
                />

                <Redirect to="/" />
                {/* or <Route render={() => <h2>Page not found</h2>} /> */}
              </Switch>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
