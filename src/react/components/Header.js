import React from 'react';
import { Link } from 'react-router';

const Header = () => {
	return (
		<div className="row">
			<nav className="navbar navbar-default">
				<div className="container-fluid">

					<div className="navbar-header">
				      	<Link className="navbar-brand" to={'/'}>Isomorphic React Redux Tutorial</Link>
					</div>

					<ul className="nav navbar-nav">
						<li>
							<Link to={'/about'}>About</Link>
						</li>
					</ul>

				</div>
			</nav>
		</div>
	);
}

export default Header;