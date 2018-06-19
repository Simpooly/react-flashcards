import React, {Component} from 'react';
import './Form.css';


class Form extends Component{
	constructor(props){
		super(props);

		this.close = this.close.bind(this);
	}

	close(){
		this.props.close();
	}

	onSubmit(e){
	      e.preventDefault();


	      var textFront = this.refs.front.value.trim();
	      var textBack = this.refs.back.value.trim();

	      if (!textFront  || ! textBack) {
	        alert("Please enter task.");
	        return;
	      }

	      this.props.AddText(textFront,textBack );

	      this.refs.front.value = " ";
	      this.refs.back.value = " ";


	}

	render(props){
		return(
			<div id="myModal" className="modal">
				<div className="modal-content">
				<span className="close" onClick={this.close}>&times;</span>
					<form onSubmit={this.onSubmit.bind(this)}>
						<div className="form-group">
					    	<label >Front</label>
					    	<textarea type="text" ref="front" onChange={this.onChange} className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
						</div>
					 	<div className="form-group">
							<label >Back</label>
							<textarea type="text" ref="back" className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
						</div>
						<button type="submit" >Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Form
