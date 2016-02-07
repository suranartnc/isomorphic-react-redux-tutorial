import React, { Component } from 'react';

export default class SearchForm extends Component {

	constructor(props) {
		super(props);
	}

	handleFormSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
				<input type="text" placeholder="Search" />
				<button>Submit</button>
			</form>
		);
	}
}