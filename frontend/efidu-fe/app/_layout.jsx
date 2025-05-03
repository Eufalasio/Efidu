import { Stack } from 'expo-router';
import { View } from 'react-native';

const AppLayout = () => {
	return (
		<View className='w-full h-full'>
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			></Stack>
		</View>
	);
};
export default AppLayout;
