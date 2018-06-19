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

	render(props){
		return(
			<div id="myModal" className="modal">
				<div className="modal-content">
				<span className="close" onClick={this.close}>&times;</span>
					<form>
						<div className="form-group">
					    	<label >Front</label>
					    	<textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
						</div>
					 	<div className="form-group">
							<label >Back</label>
							<textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
						</div>
						<button type="submit" >Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Form
