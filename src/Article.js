import React from 'react';

const Article = (props) => {

	return (
		<article>
			<h2>{ props.article.title }</h2>
		</article>
	);
}

export default Article;