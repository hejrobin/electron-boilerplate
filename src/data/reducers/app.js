import { Record } from 'immutable';

import App from 'data/models/App';

import * as actions from 'data/actions/app';

import { validAction } from 'data/utils';

const initialState = Record(App.defs, 'appReducer');

const setNetworkStatus = (state, action) =>
	state.set('networkStatus', action.payload.networkStatus);

export default (state = initialState(), action) => {
	switch (action.type) {
		case actions.SET_NETWORK_STATUS:
			return setNetworkStatus(state, action);
		default:
			if (!validAction(action)) {
				throw new Error(`No such action type "${action.type}"`);
			}

			return state;
	}
};
