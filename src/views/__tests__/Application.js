import React from 'react';

import { connectedRender } from 'utils/testing';

import Application from 'views/Application';

it('renders without crashing', () => {
	connectedRender(<Application />);
});
