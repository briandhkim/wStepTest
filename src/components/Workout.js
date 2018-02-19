import React from 'react';
import {Field, reduxForm} from 'redux-form';

const workout = ['wo 1', 'wo 2', 'wo 3', 'wo 4'];

const workoutSelector = ({input})=>(
	<div>
		<select {...input}>
			<option value=''>Select a workout </option>
			{workout.map(val=>(
				<option value={val} key={val}>
					{val}
				</option>
			))}
		</select>
	</div>
)

const WorkoutPage = props =>{
	const {handleSubmit, previousPage} = props;

	return(
		<form onSubmit={handleSubmit}>
			<div>
				<label> Choose a workout </label>
				<Field name='workout' component={workoutSelector} />
			</div>
			<div>
				<button tyype='button' className='previous' onClick={previousPage}>
					Previous
				</button>
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
})(WorkoutPage)