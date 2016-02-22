import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as QuestionActions from '../../redux/actions/QuestionActions';

import Helmet from 'react-helmet';
import ArticleList from '../components/ArticleList';

class QuestionDetail extends Component {
  
	static prefetchData = [
  		(params) => QuestionActions.getQuestionById(params.question_id),
  		QuestionActions.getQuestions
  	];

  	componentDidMount() {
  		if (! this.props.question.loaded || this.props.question.data.question_id != this.props.params.question_id) {
  			this.props.getQuestionById(this.props.params.question_id);
  			this.props.getQuestions();
  		}
  	}

  	componentWillReceiveProps(nextProps) {
  		if (this.props.params.question_id !== nextProps.params.question_id) {
  			this.props.getQuestionById(nextProps.params.question_id);
  			this.props.getQuestions();
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
				    <ArticleList articles={this.props.questions.data} />
      		</article>
    	);
  	}
}

export default connect(
	state => {
		return {
			questions: state.questions.list,
			question: state.questions.active
		};
	},
	QuestionActions
)(QuestionDetail);