import React, { Component } from 'react';

export default class SearchForm extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form>
				<input type="text" placeholder="Search" />
				<button>Submit</button>
			</form>
		);
	}
}