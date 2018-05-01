import React, { Component } from 'react';
import logo from './images/supercharge-logo.svg';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`card ${this.props.background}`}>
            </div>
        );
    }
}

export default Card;
