import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            founded: false
        };
        this.clickHandler.bind(this)
    }

    clickHandler = item => {
        console.log('handled');
        this.props.handleItemClick(item);
    };
    render() {
        return (
            <div
                className={`card ${this.props.background} hide`}
                onClick={this.clickHandler}

            >
            </div>
        );
    }
}

Card.propTypes = {
    handleItemClick: PropTypes.func.isRequired,
    showBackround: PropTypes.number.isRequired
};

export default Card;
