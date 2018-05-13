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

    componentDidMount() {
        this.setNewCardList(window.location.hash.split(':')[1])
    }

    handleCardClick = item => {
        item.target.className = item.target.className.split('hide')[0].concat('clicked');
        const clickedElements = document.getElementsByClassName('clicked');
        if(clickedElements.length === 2) {
            if (clickedElements[0].className === clickedElements[1].className) {
                this.props.handleCardListStateChange()
                Array.prototype.forEach.call(clickedElements, elem => elem.className = elem.className.replace('clicked', ' paired'));
            } else {
               Array.prototype.forEach.call(clickedElements, elem => elem.className = elem.className.replace('clicked', ' hide'));
            }
        }
        console.log(document.getElementsByClassName('card'));
    };

    reset = () => {
        this.setState({cardList: ''});
        this.setNewCardList(this.props.num)
    };

    setNewCardList = itemNum => {
        let cards=[];
        for (let i = 0; i < itemNum; i++) {
            cards.push(
                <Card
                    key={i}
                    showBackround={0}
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
