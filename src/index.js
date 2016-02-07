import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return (
		<div>Rendered by ReactDOM</div>
	);
}

ReactDOM.render(<App /> , document.getElementById('app'));