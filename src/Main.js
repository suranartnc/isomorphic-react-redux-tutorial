import React from 'react';

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
					<article>
						<h2>{ article.title }</h2>
					</article>
				);
			})}
		</div>
	);
}

export default Main;