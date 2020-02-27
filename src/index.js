import store from 'data/stores/createStore';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Application from 'views/Application';

window.addEventListener('DOMContentLoaded', () => {
	const mountNode = document.getElementById('root');

	render(
		<Provider store={store}>
			<Application />
		</Provider>,
		mountNode
	);
});
