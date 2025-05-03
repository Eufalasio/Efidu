import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavButton from '../components/atoms/navButton';
import '../global.css';

const App = () => {
	return (
		<View className='flex-1 items-center justify-center bg-white'>
			<NavButton label='Register' href='authentication/professor/register/' />
		</View>
	);
};

export default App;
