import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from 'data/stores/createStore';

export function connectedRender(component) {
	return {
		...render(<Provider store={store}>{component}</Provider>),
		store,
	};
}
