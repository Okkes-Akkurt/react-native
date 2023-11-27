import { View } from 'react-native';
import styles from './two_styles';
import BodyContainer from '../../components/twoPage/BodyContainer';

export default function () {
	return (
        <View style={styles.container}>
            <BodyContainer />
		</View>
	);
}
