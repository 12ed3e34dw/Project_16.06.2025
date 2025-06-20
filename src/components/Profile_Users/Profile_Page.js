import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Button } from 'react-native';
import {useTheme} from "../../styles/Theme";




const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 12,
        backgroundColor: '#f9f9f9',
    },
    txt_email:{
        backgroundColor: '#fff',

    },
    txt_password:{
        backgroundColor: '#fff',
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


export default function ProfileScreen({ navigation }) {
    const [date, setDate] = useState(new Date());
    const { isDarkTheme } = useTheme();
    const styles = isDarkTheme ? darkStyles : lightStyles;

    return (
        <SafeAreaView style={styles.container}>





            <Text style={styles.txt_email}>Test text email</Text>

            <Text style={styles.txt_password}>test text password</Text>





        </SafeAreaView>
    );
}
