import { combineReducers } from 'redux';

import app from 'data/reducers/app';

const rootReducer = combineReducers({
	app,
});

export default rootReducer;
