import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import logo from '../../images/supercharge-logo.svg';

import Home from "../Home/Home";
import GameWelcome from "../GameWelcome/GameWelcome";
import Game from "../Game/Game";


class App extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">MEMORY GAME</h1>
                </header>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/game-welcome" component={GameWelcome}/>
                    <Route path="/game" component={Game}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}

export default App;
