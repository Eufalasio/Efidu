import { ImageBackground, View } from 'react-native';

const StudentLayout = ({ children }) => {
	return (
		<View className='flex-1 w-full h-full flex-row justify-start items-start'>
			<View className='w-1/2 h-full justify-start items-start'>
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
			<View className='w-1/2 h-full justify-center items-center'></View>
		</View>
	);
};

export default StudentLayout;
