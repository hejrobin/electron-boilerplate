import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'data/stores/createStore';

import Application from 'views/Application';

window.addEventListener('DOMContentLoaded', async () => {
	const mountNode = document.getElementById('root');

	render(
		<Provider store={store}>
			<Application />
		</Provider>,
		mountNode
	);
});
