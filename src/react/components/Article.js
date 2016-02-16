import React from 'react';
import { Link } from 'react-router';

export default ({ article }) => {
	return (
		<article>
			<Link to={`/questions/${article.question_id}`} dangerouslySetInnerHTML={{__html: article.title }} />
		</article>
	);
};