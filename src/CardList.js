import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from "./Card";

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardTypes: ['angular', 'd3', 'jenkins', 'postcss', 'react', 'redux', 'sass', 'supercharge', 'ts', 'webpack'],
            cardList: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        let cards=[];

        for (let i = 0; i < nextProps.num; i++) {
            cards.push(<Card background={this.state.cardTypes[parseInt(i/2)]}/>)
        }
        this.setState({
            cardList: cards
        })
    }


    render() {
        return (
            <div className={'card-list'}>
                {this.state.cardList}
            </div>
        );
    }
}
CardList.propTypes = {
    num: PropTypes.number
};

CardList.propTypes.defaultProps = {
    num: 0
};

export default CardList;
