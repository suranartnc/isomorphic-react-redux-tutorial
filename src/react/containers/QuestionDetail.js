import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as QuestionActions from '../../redux/actions/QuestionActions';

import Helmet from 'react-helmet';
import ArticleList from '../components/ArticleList';

class QuestionDetail extends Component {
  
  	static prefetchData = [
    	(params) => QuestionActions.getQuestionContentById(params.question_id)
	];

	componentDidMount() {
		if (! this.props.question.loaded || this.props.question.data.question_id != this.props.params.question_id) {
      		this.props.getQuestionContentById(this.props.params.question_id);
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.params.question_id !== nextProps.params.question_id) {
      		this.props.getQuestionContentById(nextProps.params.question_id);
		}
	}

	render() {
 		return (
    		<article>
    			<Helmet 
    				title={this.props.question.data.title}
    				meta={[
    					{
    						name: 'description',
    						content: 'add description here...'
    					}
    				]}
    			/>

    			<h1 dangerouslySetInnerHTML={{__html: this.props.question.data.title }} />
    			<div dangerouslySetInnerHTML={{__html: this.props.question.data.body }} />
			    <ArticleList articles={this.props.question.related} />
    		</article>
  	);
	}
}

export default connect(
	state => {
		return {
			question: state.questions.active
		};
	},
	QuestionActions
)(QuestionDetail);