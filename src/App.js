import React from 'react';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const App = () => {
	return (
		<div className="container">
			<Header />
			<div>
				<Main />
				<Sidebar />
			</div>
			<Footer />
		</div>
	);
}

export default App;