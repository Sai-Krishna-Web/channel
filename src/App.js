import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LandingPage from './components/landingPage';
import ChannelList from './components/channelList';

import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact
        render={props=>{
          
            return(
            <LandingPage {...props}/>
            )
        }}/>
        <Route path="/channels" exact
        render={()=>{
          
            return(
            <ChannelList />
            )
        }}/>
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
