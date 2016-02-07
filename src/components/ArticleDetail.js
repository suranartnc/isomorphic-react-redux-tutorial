import React from 'react';

const ArticleDetail = (props) => {

	return (
		<article>
			<h1>{ props.params.question_id }</h1>
		</article>
	);
}

export default ArticleDetail;