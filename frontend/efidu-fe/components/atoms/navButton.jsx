import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';

const NavButton = ({ label, href }) => {
	return (
		<Link href={href} asChild>
			<Pressable className='lg:w-36 lg:h-12 bg-pri-default hover:bg-pri-hover rounded-3xl flex items-center justify-center'>
				<Text className='text-white font-bold text-lg'>{label}</Text>
			</Pressable>
		</Link>
	);
};

export default NavButton;
