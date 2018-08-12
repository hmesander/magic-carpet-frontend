import React, { Component } from 'react';
import './App.css';

import Login from './components/Login';
import Main from './components/Main';
import { ride_client_id } from './config';
import RideService from './services/ride_service';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }

    this.logIn = this.logIn.bind(this);
  }

  logIn() {
    let oauth_url = `https://api.lyft.com/oauth/authorize?client_id=${ride_client_id}&scope=public%20profile%20rides.read%20rides.request%20offline&state=%20&response_type=code`
    window.open(oauth_url,'_self');
  }

  componentDidMount() {
    let parameters = window.location.search
    if (parameters && parameters.includes('code')) {
      parameters  = parameters.slice(1);
      parameters = parameters.split('&').reduce((paramObject,combinedParameter) => {
        combinedParameter = combinedParameter.split('=');
        paramObject[combinedParameter[0]] = combinedParameter[1];
        return paramObject;
      }, {});

      /* NEXT UP: Store tokens in sessionStorage and create conditional 
        to check for initialAuth, expiredAuth, validAuth flows
      */
      RideService.getInitialAuth(parameters).then(initialAuth => { debugger })
    } else {
      return;
    }
  }


  render() {
    let content;
    if (!this.state.loggedIn) {
      content = (
        <Login handleLogin={this.logIn} />
      );
    } else if (this.state.loggedIn) {
      content = (
        <Main />
      );
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
