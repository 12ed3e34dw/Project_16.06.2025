import React, { useState,useEffect, } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function History({ navigation }) {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkStyles : lightStyles;

    return (
        <View style={styles.container}>

        </View>
    );
}

const screenWidth = Dimensions.get('window').width;
const cellWidth = screenWidth / 7;

const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 12,
        backgroundColor: '#f9f9f9',
    },
});


const darkStyles = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#1a1a1a',
    },

});

const lightStyles = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        left: 15,
        top: 70,
        backgroundColor: '#ffffff',
    },
});