import React, { Component } from 'react';

export default class SearchForm extends Component {

	constructor(props) {
		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit(event) {
		event.preventDefault();
		this.props.getSearchResults(this.refs.keyword.value);
	}

	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
				<input ref="keyword" type="text" placeholder="Search" />
				<button>Submit</button>
			</form>
		);
	}
}