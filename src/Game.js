import React, { Component } from 'react';
import './App.css';
import CardList from "./CardList";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: null
        };
        this.setCards.bind(this)
    }

    setCards = () => {
        this.setState({cards: document.getElementsByTagName("select")[0].value})
    };

    checkMatch = (item1, item2) => (
        item1 === item2
    );

    render() {
        return (
            <div className="Game">
                <select>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="20">20</option>
                </select>
                <button onClick={this.setCards}>START GAME</button>
                <CardList num={this.state.cards}/>
            </div>);
    }
}

export default Game;
