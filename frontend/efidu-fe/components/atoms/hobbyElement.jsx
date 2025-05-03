import { Image, View, Pressable, Text } from 'react-native';
import { Link } from 'expo-router';

const Hobby = () => {
    return (
        <View className='flex flex-row items-center justify-center gap-x-2'>
            
            <Image

                source={require('../../assets/footballHobbyBG.png')}
                style={{
                margin: 5,
                flex:1,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: '#ffffff', // Border color
                resizeMode: 'stretch',
                width: '100px',
                height: '100px',
                }}
            />
        </View>
    );
};

export default Hobby;
