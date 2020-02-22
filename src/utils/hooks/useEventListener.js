import { useRef, useEffect } from 'react';

const useEventListener = (
	eventName,
	eventCallback,
	eventTarget = window,
	eventParams = null
) => {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = eventCallback;
	}, [eventCallback]);

	useEffect(() => {
		const eventListener = event => savedCallback.current(event);

		eventTarget.addEventListener(eventName, eventListener, eventParams);

		return () => eventTarget.removeEventListener(eventName, eventListener);
	}, [eventName, eventTarget, eventParams]);
};

export default useEventListener;
