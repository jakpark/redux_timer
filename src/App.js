import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Timer from './components/Timer';
import TimerForm from './components/TimerForm';

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          
          <Timer>
          </Timer>
          <hr/>
          <TimerForm>
          </TimerForm>

        </div>
      </Provider>
    );
  }
}

export default App;
