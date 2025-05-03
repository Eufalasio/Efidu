import { Stack } from 'expo-router';
import { ImageBackground, View } from 'react-native';

const StudentLayout = () => {
	return (
		<View className='flex-row w-full h-full justify-center items-center'>
			<View className='w-1/2 h-full'>
				<ImageBackground
					source={require('../../../assets/student2.png')}
					style={{
						objectFit: 'scale-down',
						resizeMode: 'contain',
						width: '100%',
						height: '100%',
					}}
				/>
			</View>
			<View className='w-1/2 h-[100%]'>
				<Stack
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen
						name='authentication/student/register'
						options={{ title: 'Student Register' }}
					/>
				</Stack>
			</View>
		</View>
	);
};

export default StudentLayout;
