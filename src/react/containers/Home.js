import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as QuestionActions from '../../redux/actions/QuestionActions';

import ArticleList from '../components/ArticleList';
import SearchBar from '../components/SearchBar';

class Home extends Component {

	static prefetchData = [
		QuestionActions.getQuestions
	];

	componentDidMount() {
		if (! this.props.questions.loaded) {
			this.props.getQuestions();
		}
	}

	render() {
		return (
			<div>
				<SearchBar getSearchResults={this.props.searchQuestions} />
				<ArticleList articles={this.props.questions.data} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		questions: state.questions.list
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(QuestionActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);