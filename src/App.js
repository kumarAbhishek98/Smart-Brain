import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import VideoSearch from './Pages/VideoSearch';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/video" component={VideoSearch} />
        </Switch>
      </>
    );
  }
}

export default App;
