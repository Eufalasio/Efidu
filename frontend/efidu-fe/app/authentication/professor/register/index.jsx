import { ImageBackground } from 'react-native';
import NavButton from '../../../../components/atoms/navButton';

const RegisterProfessor = () => {
	return (
		<ImageBackground>
			<NavButton label={'Register'} href='authentication/student/register/' />
		</ImageBackground>
	);
};

export default RegisterProfessor;
