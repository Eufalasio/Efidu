import { View, Text } from 'react-native';
import NavButton from '../../../../components/atoms/navButton';
import InputField from '../../../../components/atoms/inputField';

const RegisterUser = () => {
	return (
		<View className=' w-[50%] h-full self-center items-center justify-center gap-y-4'>
			<Text></Text>
			<InputField type='email-address' placeholder={'Email'}></InputField>
			<InputField type='password' placeholder={'Password'}></InputField>
			<InputField type='password' placeholder={'Confirm password'}></InputField>
			<InputField type='default' placeholder={'Full Name'}></InputField>
			<InputField type='default' placeholder={'Date of birth'}></InputField>
		</View>
	);
};

export default RegisterUser;
