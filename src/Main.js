import React, { Component } from 'react';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import ArticleList from './ArticleList';
import Article from './Article';

const API_URL = 'https://api.stackexchange.com/2.2/';

function fetchData(url, callback) {
	fetch(url)
	  	.then(response => {
	    	if (response.status >= 400) {
	      		throw new Error("Bad response from server");
	    	}
	    	return response.json();
	  	})
	  	.then(data => {
	    	callback(data);
	  	});
}

export default class Main extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			articles: []
		}

		setTimeout(() => {
			fetchData(`${API_URL}questions?order=desc&sort=activity&site=stackoverflow`, (data) => {
				this.setState({
					articles: data.items
				});
			});
		}, 2000);
	}

	render() {
		return (
			<div>
				<ArticleList articles={this.state.articles} />
			</div>
		);
	}
}