import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Card from './Card/Card';
import Drawbutton from './Drawbutton/Drawbutton';
import firebase from 'firebase/app';
import 'firebase/database';

import {DB_CONFIG} from './config/firebase/db_config';

class App extends Component {
  constructor(props){
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.database.on('child_added', snap => {
      currentCards.push({
        id: snap.key,
        ques: snap.val().ques,
        ans: snap.val().ans,
      })

      this.setState({
          cards: currentCards,
          currentCard: this.getRandomCard(currentCards)
      })
    })
  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="cardRow">
            <Card ques={this.state.currentCard.ques}
              ans={this.state.currentCard.ans}
              />
        </div>
        <div className="buttonRow">
          <Drawbutton drawCard={this.updateCard}/>
        </div>

      </div>
    );
  }
}

export default App;
