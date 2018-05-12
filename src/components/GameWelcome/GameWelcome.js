import React, { Component } from 'react';
import './GameWelcome.css';
import { NavLink } from "react-router-dom";
// import CardList from "./src/components/CardList/CardList";

class GameWelcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 6
        };
        this.setCards.bind(this)
    }

    setCards = () => {
        this.setState({selectedValue: document.getElementsByTagName("select")[0].value})
    };

    checkMatch = (item1, item2) => (
        item1 === item2
    );

    render() {
        return (
            <div className="game-welcome">
                <div className='content-wrapper'>
                    <h1> SUPERCHARGE </h1>
                    <h2> Memory game </h2>
                    <p> Deck size: </p>
                    <select onChange={this.setCards}>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                    </select>
                    <NavLink to={`/game/:${this.state.selectedValue}`} className='game-button'>START GAME</NavLink>
                </div>
            </div>);
    }
}

export default GameWelcome;
