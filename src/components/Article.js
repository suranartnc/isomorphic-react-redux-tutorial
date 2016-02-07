import React from 'react';
import { Link } from 'react-router';


const Article = (props) => {

	return (
		<article>
			<Link to={`questions/${props.article.question_id}`}>{ props.article.title }</Link>
		</article>
	);
}

export default Article;