import React, { Component } from 'react';
import '../App/App.css';
import { NavLink } from "react-router-dom";
class Home extends Component {
    render() {
        return (
            <div className="App">
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
                <NavLink className='game-button' to="/game-welcome">GO TO GAME</NavLink>
            </div>
        );
    }
}

export default Home;
