import React, { Component } from 'react';

import Article from './Article';


export default class Main extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			articles: [
				{
					id: 1,
					title: 'Title 1'
				}, {
					id: 2,
					title: 'Title 2'
				}, {
					id: 3,
					title: 'Title 3'
				}
			]
		}

		setTimeout(() => {
			this.setState({
				articles: this.state.articles.concat([{
					id: 4,
					title: 'Title 4'
				}])
			});
		}, 2000);
	}

	render() {
		return (
			<div>
				{this.state.articles.map(function(article, index) {
					return (
						<Article key={ article.id } article={article} />
					);
				})}
			</div>
		);
	}
}