import React, { Component } from 'react';
import logo from './images/supercharge-logo.svg';
import './App.css';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Supercharge memory game</h1>
                </header>
                <h1 >
                    This is the best card matching game!
                </h1>
                <h2>
                    Rules:
                </h2>
                <p>
                    1. When you clicks a card, flip the card over and reveal the hidden image.
                </p>
                <p>
                    2. When two cards are revealed:
                </p>
                <p>
                    3. If the cards are identical, remove them from play.
                </p>
                - If the cards are identical, remove them from play.
                <p>
                    - If they are not, flip them back.
                </p>
                <p>
                    4. The game ends when all cards are removed.
                </p>

            </div>
        );
    }
}

export default Home;
