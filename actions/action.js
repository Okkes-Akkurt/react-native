export const updateColors = (color, shouldReset = false) => ({
	type: 'UPDATE_COLORS',
	payload: { color, shouldReset },
});

export const updateResetButton = (isActive) => ({
	type: 'UPDATE_RESET_BUTTON',
	payload: isActive,
});

export const updateSubmitButton = (isActive) => ({
	type: 'UPDATE_SUBMIT_BUTTON',
	payload: isActive,
});

export const resetColors = () => ({
	type: 'RESET_COLORS',
});
