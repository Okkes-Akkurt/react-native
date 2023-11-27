const initialState = {
	headerColor: 'yellow',
	footerColor: 'green',
	selectedColor: '',
	inputValues: {
		input1: '',
		input2: '',
		input3: '',
		input4: '',
	},
	isResetButtonActive: false,
	isSubmitButtonActive: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_COLORS':
			const { color, shouldReset } = action.payload;
			const updatedColors = {
				headerColor: shouldReset ? initialState.headerColor : color,
				footerColor: shouldReset ? initialState.footerColor : color,
				selectedColor: shouldReset ? initialState.selectedColor : color,
			};

			return {
				...state,
				...updatedColors,
			};
		case 'RESET_COLORS':
			return {
				...initialState,
			};
		case 'UPDATE_RESET_BUTTON':
			return {
				...state,
				isResetButtonActive: action.payload,
			};
		case 'UPDATE_SUBMIT_BUTTON':
			return {
				...state,
				isSubmitButtonActive: action.payload,
			};

		default:
			return state;
	}
};

export default appReducer;
