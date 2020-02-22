import { applyMiddleware, createStore, compose } from 'redux';

import reducers from 'data/reducers';

function createThunkMiddleware(extraArgument) {
	return ({ dispatch, getState }) => next => action => {
		if (typeof action === 'function') {
			return action(dispatch, getState, extraArgument);
		}

		return next(action);
	};
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlewares = applyMiddleware(thunk);

if (process.env.NODE_ENV !== 'production') {
	middlewares = composeEnhancers(middlewares);
}

const configureStore = (preloadedState => {
	return createStore(reducers, preloadedState, middlewares);
})();

export default configureStore;
