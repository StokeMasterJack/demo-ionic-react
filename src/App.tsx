import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { IonApp } from '@ionic/react';

import TabsRoot from './TabsRoot';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div id="app">
        <IonApp>
            <Route path="/" component={TabsRoot} />
        </IonApp>
      </div>
      </Router>
    );
  }
}

export default App;