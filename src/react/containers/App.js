import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';

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