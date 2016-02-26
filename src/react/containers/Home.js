import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ArticleActions from '../../redux/actions/ArticleActions';

import ArticleList from '../components/ArticleList';
import SearchBar from '../components/SearchBar';

class Home extends Component {

	static prefetchData = [
		ArticleActions.getArticles
	];

	componentDidMount() {
		if (! this.props.articles.loaded) {
			this.props.getArticles();
		}
	}

	render() {
		return (
			<div>
				<SearchBar getSearchResults={this.props.searchArticles} />
				<ArticleList articles={this.props.articles.data} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		articles: state.articles.list
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ArticleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);