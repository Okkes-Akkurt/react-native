// BodyContainer.js
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Text, View, TextInput, ScrollView } from 'react-native';
import styles from './body_container_styles';
import { updateColors, resetColors, updateResetButton, updateSubmitButton } from '../../../actions/action';
import { TouchableOpacity } from 'react-native';

const BodyContainer = ({
	updateColors,
	resetColors,
	updateResetButton,
	updateSubmitButton,
	selectedColor,
	isResetButtonActive,
	isSubmitButtonActive,
	inputValues,
}) => {
	const [input1, setInput1] = useState(inputValues.input1);
	const [input2, setInput2] = useState(inputValues.input2);
	const [input3, setInput3] = useState(inputValues.input3);
	const [input4, setInput4] = useState(inputValues.input4);

	useEffect(() => {
		const isAnyInputFilled = Object.values({ input1, input2, input3, input4 }).some((value) => value !== '');
		updateResetButton(isAnyInputFilled);

		const isAllInputsFilled = Object.values({ input1, input2, input3, input4 }).every((val) => val !== '');
		updateSubmitButton(isAllInputsFilled);
	}, [input1, input2, input3, input4]);

	const handleInputChange = (inputName, value) => {
		switch (inputName) {
			case 'input1':
				setInput1(value);
				break;
			case 'input2':
				setInput2(value);
				break;
			case 'input3':
				setInput3(value);
				break;
			case 'input4':
				setInput4(value);
				break;
			default:
				break;
		}
	};

	const handleMenuItemClick = (color) => {
		updateColors(color, false);
	};

	const handleResetButtonClick = () => {
		resetColors();
		updateColors('', true);
		updateResetButton(false);
		setInput1('');
		setInput2('');
		setInput3('');
		setInput4('');
	};

	const handleSubmitButtonClick = () => {
		updateSubmitButton(true);
		navigation.navigate('two');
	};

	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<View style={styles.innerBody}>
					{Platform.OS !== 'ios' && Platform.OS !== 'android' && (
						<TouchableOpacity style={styles.left}>
							{[ 'red', 'orange', 'yellow', 'green', 'blue', '#004282', 'purple' ].map((color) => (
								<Button
									key={color}
									title='menu item'
									color={color}
									onPress={() => handleMenuItemClick(color)}
								/>
							))}
						</TouchableOpacity>)}
					<View style={styles.right}>
						<View style={styles.title}>
							<Text>TITLE</Text>
						</View>
						<View style={styles.inputContainer}>
							<TextInput
								style={styles.inputs}
								placeholder={`TEXT INPUT 1`}
								placeholderTextColor='#F85454'
								autoCapitalize='sentences'
								value={input1}
								onChangeText={(text) => handleInputChange('input1', text)}
							/>
							<TextInput
								style={styles.inputs}
								placeholder={`TEXT INPUT 2`}
								placeholderTextColor='#F85454'
								autoCapitalize='sentences'
								value={input2}
								onChangeText={(text) => handleInputChange('input2', text)}
							/>
							<TextInput
								style={styles.inputs}
								placeholder={`TEXT INPUT 3`}
								placeholderTextColor='#F85454'
								autoCapitalize='sentences'
								value={input3}
								onChangeText={(text) => handleInputChange('input3', text)}
							/>
							<TextInput
								style={styles.inputs}
								placeholder={`TEXT INPUT 4`}
								placeholderTextColor='#F85454'
								autoCapitalize='sentences'
								value={input4}
								onChangeText={(text) => handleInputChange('input4', text)}
							/>
							<View />

							<View style={styles.buttons}>
								<View style={styles.button}>
									<Button
										title='RESET BUTTON'
										disabled={!isResetButtonActive}
										onPress={handleResetButtonClick}
										color={selectedColor}
									/>
								</View>
								<View style={styles.button}>
									<Button
										title='SUBMIT BUTTON'
										disabled={!isSubmitButtonActive}
										onPress={handleSubmitButtonClick}
										color={selectedColor}
									/>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			{Platform.OS !== 'ios' && Platform.OS !== 'android' && (
				<View style={styles.sidebar}>
					<Text style={styles.sidebarText}>SIDE BAR</Text>
				</View>
			)}
		</View>
	);
};

const mapStateToProps = (state) => ({
	selectedColor: state.selectedColor,
	isResetButtonActive: state.isResetButtonActive,
	isSubmitButtonActive: state.isSubmitButtonActive,
	inputValues: state.inputValues,
	headerColor: state.headerColor,
	footerColor: state.footerColor,
});

const mapDispatchToProps = {
	updateColors,
	resetColors,
	updateResetButton,
	updateSubmitButton,
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);
