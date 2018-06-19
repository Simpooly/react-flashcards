import React, {Component} from 'react';
import './CreateCardButton.css';

class CreateCardButton extends Component{
	constructor(props){
		super(props);

		this.createCard = this.createCard.bind(this);
	}

	createCard(){
		this.props.createCard();
	}

	render(props){
		return(
			<div className="buttonContainer">
				<button className="btn-secondary" onClick={this.createCard} >Create New Card</button>
			</div>
		)
	}
}

export default CreateCardButton
