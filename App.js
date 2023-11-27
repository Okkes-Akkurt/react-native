import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import One from './pages/one/One';
import Two from './pages/two/Two';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<View style={styles.container}>
				<StatusBar style='auto' />
						<Header />

					<Stack.Navigator initialRouteName='One'>
						<Stack.Screen
							name='One'
							component={One}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name='Two'
							component={Two}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
					<Footer />


				</View>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
