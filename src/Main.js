import React from 'react';

import Article from './Article';

const Main = () => {

	const articles = [
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
	];

	return (
		<div>
			{articles.map(function(article, index) {
				return (
					<Article key={ article.id } article={article} />
				);
			})}
		</div>
	);
}

export default Main;