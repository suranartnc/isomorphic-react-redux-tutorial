import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as ArticleActions from '../../redux/actions/ArticleActions';

import Helmet from 'react-helmet';
import ArticleList from '../components/ArticleList';

class Entry extends Component {
  
  	static prefetchData = [
    	(params) => ArticleActions.getArticleContentById(params.article_id)
	];

	componentDidMount() {
		if (! this.props.article.loaded || this.props.article.data.article_id != this.props.params.article_id) {
      		this.props.getArticleContentById(this.props.params.article_id);
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.params.article_id !== nextProps.params.article_id) {
      		this.props.getArticleContentById(nextProps.params.article_id);
		}
	}

	render() {
 		return (
    		<article>
    			<Helmet 
    				title={this.props.article.data.title}
    				meta={[
    					{
    						name: 'description',
    						content: 'add description here...'
    					}
    				]}
    			/>

    			<h1 dangerouslySetInnerHTML={{__html: this.props.article.data.title }} />
    			<div dangerouslySetInnerHTML={{__html: this.props.article.data.body }} />
			    <ArticleList articles={this.props.article.related} />
    		</article>
  	);
	}
}

export default connect(
	state => {
		return {
			article: state.articles.active
		};
	},
	ArticleActions
)(Entry);