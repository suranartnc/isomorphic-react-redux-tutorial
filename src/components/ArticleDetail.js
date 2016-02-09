import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ArticleActions from '../actions/ArticleActions';

import ArticleList from './ArticleList';

class ArticleDetail extends Component {

	static prefetchData = [
		ArticleActions.getArticleById,
		ArticleActions.getLatestArticles
	];

	componentDidMount() {
		this.props.getArticleById(this.props.params);
		this.props.getLatestArticles();
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.params.question_id !== nextProps.params.question_id) {
			this.props.getArticleById(nextProps.params);
			this.props.getLatestArticles();		
		}
	}

	render() {
		return (
			<article>
				<h1>{ this.props.article.title }</h1>
				<div dangerouslySetInnerHTML={{__html: this.props.article.body }} />
				<ArticleList articles={this.props.latestArticles} />
			</article>
		);
	}
}

function mapStateToProps(state) {
	return {
		latestArticles: state.articleList,
		article: state.articleActive
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ArticleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);