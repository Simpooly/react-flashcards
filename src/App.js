import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Card from './Card/Card';
import Drawbutton from './Drawbutton/Drawbutton';
import CreateCardButton from './CreateCardButton/CreateCardButton';
import Form from './Form/Form';
import firebase from 'firebase/app';
import 'firebase/database';

import {DB_CONFIG} from './config/firebase/db_config';

class App extends Component {
  constructor(props){
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG); //this uses the firebase database
    this.database = this.app.database().ref().child('cards'); //ref acesses different branches in the database
    this.updateCard = this.updateCard.bind(this);
    this.createNewCard = this.createNewCard.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      cards: [],
      currentCard: {}
    }
  }
  //This works with the database
  componentWillMount(){
    const currentCards = this.state.cards;

    //gets our cards fron firebase
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

  createNewCard(){
   // console.log('modal popup');
   var modal = document.getElementById('myModal');
   modal.style.display = "block"
  }

  closeModal(){
    //console.log('close modal')
    var span = document.getElementsByClassName("close")[0];
    var modal = document.getElementById('myModal');
    span.onclick = function() {
        modal.style.display = "none";
    }
  }
  // Get the <span> element that closes the modal

  handleNewText(textFront, textBack){

    var newCard = {
        id: this.state.cards.length + 1 ,
        ques: textFront,
        ans: textBack,
      }

    //Adds new card to the cards database
    this.database.push(newCard);

    //This stores int he browser, gone one refresh
    // this.setState({cards: this.state.cards.concat(newCard)});

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
          <CreateCardButton createCard={this.createNewCard} />
          <Form close={this.closeModal} AddText={this.handleNewText.bind(this)} />
      </div>
    );
  }
}

export default App;
