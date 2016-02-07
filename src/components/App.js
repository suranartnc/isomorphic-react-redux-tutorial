import React from 'react';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const App = (props) => {
	return (
		<div className="container">
			<Header />
			<div>
				{ props.children }
			</div>
			<Footer />
		</div>
	);
}

export default App;