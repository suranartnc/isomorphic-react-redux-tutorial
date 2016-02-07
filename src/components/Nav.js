import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to={`/`}>Home</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;