import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ArticleActions from '../actions/ArticleActions';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';

class Home extends Component {

	static prefetchData = [
		ArticleActions.getLatestArticles
	];

	componentDidMount() {
		this.props.getLatestArticles();
	}

	render() {
		return (
			<div>
				<SearchBar getSearchResults={this.props.getSearchResults} />
				<ArticleList articles={this.props.articles} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		articles: state.articleList
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ArticleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);