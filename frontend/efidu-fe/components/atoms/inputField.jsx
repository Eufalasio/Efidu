import { TextInput } from 'react-native';

const InputField = ({ type, placeholder, value, onChange }) => {
	return (
		<TextInput
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			secureTextEntry={type === 'password'}
			className='w-full h-10 px-4 border-2 border-border-default rounded-3xl font-medium placeholder:text-placeholder-default focus:outline-none focus:ring-1 focus:primary-default'
		/>
	);
};

export default InputField;
