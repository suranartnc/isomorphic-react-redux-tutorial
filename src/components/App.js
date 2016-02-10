import React from 'react';
import Helmet from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

const App = (props) => {
	return (
		<div className="container">
			<Helmet title="Isomorphic React Redux Tutorial" />
			<Header />
			<div>
				{ props.children }
			</div>
			<Footer />
		</div>
	);
}

export default App;