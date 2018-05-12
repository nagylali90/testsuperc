import React, { Component } from 'react';
import logo from '../../images/supercharge-logo.svg';
import './Card.css';
import CardList from "../CardList/CardList";
import PropTypes from 'prop-types';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            founded: false
        };
        this.clickHandler.bind(this)
    }

    clickHandler = () => {
        console.log('handled');
        this.setState({clicked: true});
        this.props.handleItemClick(this.props.background);
    };

    // setFound = () => {
    //     if (!this.state.founded) {
    //         this.setState({
    //             founded: true
    //         })
    //     }
    // }
    render() {
        return (
            <div
                className={`card ${this.props.background} ${!this.state.clicked && 'hide'}`}
                onClick={this.clickHandler}

            >
            </div>
        );
    }
}

Card.propTypes = {
    handleItemClick: PropTypes.func.isRequired
};

export default Card;
