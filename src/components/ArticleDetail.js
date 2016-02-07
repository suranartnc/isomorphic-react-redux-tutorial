import React, { Component } from 'react';

require('es6-promise').polyfill();
require('isomorphic-fetch');

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

export default class ArticleDetail extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			article: {}
		}

		this.getArticleById(this.props.params.question_id);
	}

	getArticleById(id) {
		fetchData(`${API_URL}questions/${id}?order=desc&sort=activity&site=stackoverflow&filter=withbody`, (data) => {
			this.setState({
				article: data.items[0]
			});
		});
	}

	render() {
		return (
			<article>
				<h1>{ this.state.article.title }</h1>
				<div dangerouslySetInnerHTML={{__html: this.state.article.body }} />
			</article>
		);
	}
}