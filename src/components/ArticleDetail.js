import React, { Component } from 'react';

import fetchData, { api } from '../utils/fetchData';

export default class ArticleDetail extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			article: {}
		}
	}

	componentDidMount() {
		this.getArticleById(this.props.params.question_id);
	}

	getArticleById(id) {
		fetchData(`${api.stackExchange}questions/${id}?order=desc&sort=activity&site=stackoverflow&filter=withbody`, (data) => {
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