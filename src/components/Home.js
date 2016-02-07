import React, { Component } from 'react';

import fetchData, { api } from '../utils/fetchData';

import ArticleList from './ArticleList';
import Article from './Article';
import SearchBar from './SearchBar';

export default class Main extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			articles: []
		}

		this.getSearchResults = this.getSearchResults.bind(this);

		this.getLatestArticles();
	}

	getLatestArticles() {
		fetchData(`${api.stackExchange}questions?order=desc&sort=activity&site=stackoverflow`, (data) => {
			this.setState({
				articles: data.items
			});
		});
	}

	getSearchResults(keyword) {
		fetchData(`${api.stackExchange}search/advanced?order=desc&sort=activity&site=stackoverflow&q=${keyword}`, (data) => {
			this.setState({
				articles: data.items
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar getSearchResults={this.getSearchResults} />
				<ArticleList articles={this.state.articles} />
			</div>
		);
	}
}