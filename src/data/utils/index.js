export const asAction = (type, payload) => ({ type, payload });

export const validAction = action =>
	action && action.type && action.type.startsWith('@@');
