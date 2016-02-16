import React from 'react';

import Article from './Article';

const ArticleList = (props) => {
	return (
		<div>
			{props.articles.map(function(article, index) {
				return (
					<Article key={ article.question_id } article={article} />
				);
			})}
		</div>
	);
}

export default ArticleList;