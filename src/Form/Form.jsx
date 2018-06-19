import React from 'react';
import './Form.css';

const Form = (props) => (
<form>
	<div class="form-group">
    	<label for="exampleFormControlTextarea1">Front</label>
    	<textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
	</div>
 	<div class="form-group">
		<label for="exampleFormControlTextarea1">Back</label>
		<textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
	</div>
</form>
)
export default Form
