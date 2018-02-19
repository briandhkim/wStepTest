import React from 'react';
import {Field, reduxForm} from 'redux-form';
import renderField from './renderField';

const RepPage = props =>{
	const {handleSubmit} = props;

	return(
		<form onSubmit={handleSubmit}>
			<Field 
				name='workout1'
				type='text'
				component={renderField}
				label="Workout 1"
			/>
			<Field 
				name='workout2'
				type='text'
				component={renderField}
				label="Workout 2"
			/>
			<div>
				<button type='submit' className='submit'>
					Submit
				</button>
			</div>
		</form>
	)

}

export default reduxForm({
	form: 'wizard',
	destoryOnUnmount: false,
	forceUnregisterOnUnmount: true
})(RepPage)