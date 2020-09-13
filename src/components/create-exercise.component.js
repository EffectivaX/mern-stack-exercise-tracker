import React, { Component } from 'react'

export default class CreateExercise extends Component {

	constructor(props){
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeDuration = this.onChangeDuration.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state= {
			username: '',
			decription: '',
			duration: 0,
			date: new Date(),

			users: []
		}
	}

	onChangeUsername(e) {
		this.setState({
			username: e.targe.value
		});
	}

	onChangeDescription(e) {
		this.setState({
			description: e.targe.value
		});
	}

	onChangeDuration(e) {
		this.setState({
			duration: e.targe.value
		});
	}

	onChangeDate(date) {
		this.setState({
			date: date
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const exercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date
		}

		console.log(exercise);

		window.location= '/';
	}


  render() {
    return (
      <div>
	  	<p>You are now viewing the Create Exercise Component</p>
	  </div>
    )
  }
}
