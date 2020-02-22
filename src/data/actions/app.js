import { asAction } from 'data/utils';

export const SET_NETWORK_STATUS = 'app/SET_NETWORK_STATUS';

export const setNetworkStatus = networkStatus => dispatch =>
	dispatch(asAction(SET_NETWORK_STATUS, { networkStatus }));
