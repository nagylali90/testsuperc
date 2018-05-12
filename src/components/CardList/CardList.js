import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from "../Cards/Card";
import './CardList.css';


class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNum: 0,
            cardTypes: ['angular', 'd3', 'jenkins', 'postcss', 'react', 'redux', 'sass', 'supercharge', 'ts', 'webpack'],
            cardList: '',
            flippedCard: '',
        };
        this.reset.bind(this);
        this.setNewCardList.bind(this);
    }

    handleCardClick = () => (
        this.setState((prevState, props) => {
            console.log('almafa')
            if (prevState.flippedCard) {
                if (prevState.flippedCard === props) {
                    prevState.cardList.forEach(item => {
                        console.log(item)
                    });
                    return ({
                        flippedCard: ''
                    });

                } else {
                    return ({flippedCard: ''});
                }
            } else {
                return ({flippedCard: props})
            }
        })
    );

    reset = () => {
        console.log('reset');
        console.log(this.state.cardList[0])

        this.setState({cardList: ''});
        this.setNewCardList(this.state.cardNum)
    };

    setNewCardList = itemNum => {
        let cards=[];
        for (let i = 0; i < itemNum; i++) {
            cards.push(
                <Card
                    key={i}
                    background={this.state.cardTypes[parseInt(i/2)]}
                    handleItemClick={ this.handleCardClick }
                />
            )
        }
        const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
        shuffleArray(cards);
        this.setState({
            cardList: cards
        })
    };

    componentWillReceiveProps(nextProps) {
        if(!this.state.cardList && this.state.cardNum === nextProps.num) {
            this.setNewCardList(nextProps.num)
        } else if (this.state.cardNum !== nextProps.num) {
            this.setState({cardNum: nextProps.num});
        }

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
    num: PropTypes.number.isRequired,
    handleCardListStateChange: PropTypes.func.isRequired
};

export default CardList;
