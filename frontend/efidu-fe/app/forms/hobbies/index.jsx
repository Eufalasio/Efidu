import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from '@expo-google-fonts/jersey-10/useFonts';
import { Jersey10_400Regular } from '@expo-google-fonts/jersey-10/400Regular';
import Hobby from '../../../components/atoms/hobbyElement';

const HobbiesForm = () => {
    const [fontsLoaded] = useFonts({
        Jersey10_400Regular,
    });

    if (!fontsLoaded) {
        return null; // or a loading indicator
    }
    else{
    return (
        <LinearGradient colors={['#17A6C6', '#117B93','#0B5060']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} className="flex-1 justify-start items-center pt-24 px-4">
            <View
                style={{
                    position: 'absolute',
                    top: 7, // Distance from the top of the screen
                    left: 20, // Distance from the left side of the screen
                }}
            >
                <Text style={{fontSize: 80, fontFamily: 'Jersey10_400Regular', color: "#fff"}} >
                    EFIDU
                </Text>
            </View>

            <Text style={{fontSize: 60, paddingVertical: 10,  fontFamily: "Jersey10_400Regular", color: "#fff"}}>Select your interests</Text>
            
            <View
                style={{
                    marginTop: 20, // Adds space between the "Select your interests" text and the box
                    padding: 10, // Space inside the box
                    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background
                    borderRadius: 8, // Rounded corners
                    borderWidth: 2, // Border thickness
                    borderColor: '#ffffff', // Border color
                    alignItems: 'center', // Centers the text inside the box horizontally
                    width: '60%', // Optional: makes the box take up 80% of the screen width
                }}
            >

                <Hobby />
                <Hobby />
            </View>
        
        </LinearGradient>
    );
    }   
};

export default HobbiesForm;