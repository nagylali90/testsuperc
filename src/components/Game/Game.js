import React, { Component } from 'react';
import './Game.css';
import { NavLink } from "react-router-dom";
import CardList from "../CardList/CardList";

class Game extends Component {
    constructor(props) {
        super(props);
        this.cardList = React.createRef();
        this.state = {
            cards: 0,
            found: 0,
            best:0,
            flippedCard: ''
        };
        this.resetCardList.bind(this);
        this.handleCardListStateChange.bind(this)
    }

    componentDidMount() {
        this.setState({cards: window.location.hash.split(':')[1]});
    }

    handleCardListStateChange = () => (
        this.setState((prevState, props) => {
            return ({
                found: prevState.found++,
            });
        })
    );


    // restart = () => {
    //     this.setState({cards: document.getElementsByTagName("select")[0].value})
    // };
    resetCardList = () => {
        this.cardList.current.reset()
        // this.setState({cards: document.getElementsByTagName("select")[0].value})
    };

    checkMatch = (item1, item2) => (
        item1 === item2
    );

    render() {
        return (
            <div className="game-welcome">
                <div className='content-wrapper'>
                    <button onClick={this.resetCardList}>Restart</button>
                    <CardList
                        num={parseInt(this.state.cards)}
                        handleCardListStateChange={this.handleCardListStateChange}
                        ref={this.cardList}
                    />
                    <p> { this.state.found}</p>
                </div>
            </div>);
    }
}

export default Game;
