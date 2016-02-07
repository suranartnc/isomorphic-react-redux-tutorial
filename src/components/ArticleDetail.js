import React, { Component } from 'react';

import fetchData, { api } from '../utils/fetchData';

import ArticleList from './ArticleList';

export default class ArticleDetail extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			article: {},
			latestArticles: []
		}
	}

	componentDidMount() {
		this.getArticleById(this.props.params.question_id);
		this.getLatestArticles();
	}

	componentWillReceiveProps(nextProps) {
		this.getArticleById(nextProps.params.question_id);
		this.getLatestArticles();
	}

	getArticleById(id) {
		fetchData(`${api.stackExchange}questions/${id}?order=desc&sort=activity&site=stackoverflow&filter=withbody`, (data) => {
			this.setState({
				article: data.items[0]
			});
		});
	}

	getLatestArticles() {
		fetchData(`${api.stackExchange}questions?order=desc&sort=activity&site=stackoverflow`, (data) => {
			this.setState({
				latestArticles: data.items
			});
		});
	}

	render() {
		return (
			<article>
				<h1>{ this.state.article.title }</h1>
				<div dangerouslySetInnerHTML={{__html: this.state.article.body }} />
				<ArticleList articles={this.state.latestArticles} />
			</article>
		);
	}
}