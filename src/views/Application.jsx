import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import useEventListener from 'utils/hooks/useEventListener';

import { setNetworkStatus } from 'data/actions/app';

import * as selectors from 'data/selectors';

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25vh;
`;

const App = ({ networkStatus, setNetworkStatus }) => {
	const dispatchNetworkStatus = useCallback(() => {
		setNetworkStatus(window.navigator.onLine);
	}, [setNetworkStatus]);

	useEventListener('offline', dispatchNetworkStatus);
	useEventListener('online', dispatchNetworkStatus);

	return (
		<Wrapper>
			{networkStatus ? (
				<span role="img" aria-label="Happy face emoji">
					😁
				</span>
			) : (
				<span role="img" aria-label="Sad face emoji">
					😭
				</span>
			)}
		</Wrapper>
	);
};

const stateToProps = state => ({
	networkStatus: selectors.app.getNetworkStatus(state),
});

const dispatchToProps = {
	setNetworkStatus,
};

export default connect(stateToProps, dispatchToProps)(App);
