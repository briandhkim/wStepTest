import React from 'react';
import {Field, reduxForm} from 'redux-form';

const muscles = ['Muscle 1', 'muscle 2', 'muscle 3', 'muscle 4'];

const muscleSelector = ({input})=>(
	<div>
		<select {...input}>
			<option value=''>Select a muscle group </option>
			{muscles.map(val=>(
				<option value={val} key={val}>
					{val}
				</option>
			))}
		</select>
	</div>
)

const MusclePage = props =>{
	const {handleSubmit} = props;

	return(
		<form onSubmit={handleSubmit}>
			<div>
				<label> Choose a muscle </label>
				<Field name='muscle' component={muscleSelector} />
			</div>
			<div>
				<button type='button' className='next'>
					Next
				</button>
			</div>
		</form>

	)

}

export default reduxForm({
	form: 'wizard',
	destoryOnUnmount: false,
	forceUnregisterOnUnmount: true
})(MusclePage)