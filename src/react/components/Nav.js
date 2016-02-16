import React from 'react';
import { Link } from 'react-router';

export default () => {
	return (
		<nav>
			<ul>
				<li><Link to={'/'}>Home</Link></li>
			</ul>
		</nav>
	);
}