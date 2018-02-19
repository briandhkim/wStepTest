import React, {Component} from 'react';
import MusclePage from './Muscle';
import WorkoutPage from './Workout';
import RepPage from './Rep';

class WorkoutTemplate extends Component{
	constructor(props){
		super(props);
		this.nextPage= this.nextPage.bind(this);
		this.previousPage = this.previousPAge.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state={
			page: 1
		}
	}	

	nextPage(){
		this.setState({
			page: this.state.page+1
		})
	}
	previousPage(){
		this.setState({
			page: this.state.page-1
		})
	}
	handleSubmit(values){
		console.log(values);
	}

	render(){
		// const {onSubmit} = this.props;
		const {page} = this.state;

		return(
			<div>
				{page===1 &&<MusclePage onSubmit={this.nextPage} />}
				{page===2 && <WorkoutPage onSubmit={this.nextPage} previousPage={this.previousPage} />}
				{page===3 && <RepPage onSubmit={this.handleSubmit} previousPAge={this.previousPage} />}
			</div>
		)

	}


}

export default WorkoutTemplate;