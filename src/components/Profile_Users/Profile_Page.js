import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Button } from 'react-native';
import {useTheme} from "../../styles/Theme";
import {Ionicons} from "@expo/vector-icons";




const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 12,
        backgroundColor: '#f9f9f9',
    },
    txt_email: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginVertical: 10,
        fontSize: 16,
    },
    txt_password: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        left: -20,
        top: 10,
        width: '200%',
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignSelf: 'flex-start',
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});

const darkStyles = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#1a1a1a',
    },
    txt_email: {
        ...baseStyles.txt_email,
        backgroundColor: '#2a2a2a',
        color: '#ffffff',
    },
    txt_password: {
        ...baseStyles.txt_password,
        backgroundColor: '#2a2a2a',
        color: '#ffffff',
    },
    backButtonText: {
        ...baseStyles.backButtonText,
        color: '#ffffff',
    },
    backButtonIconColor: {
        color: '#ffffff',
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
    txt_email: {
        ...baseStyles.txt_email,
        color: '#000000',
    },
    txt_password: {
        ...baseStyles.txt_password,
        color: '#000000',
    },
    backButtonText: {
        ...baseStyles.backButtonText,
        color: '#000000',
    },
    backButtonIconColor: {
        color: '#000000',
    },
});



export default function ProfileScreen({ navigation }) {
    const [date, setDate] = useState(new Date());
    const { isDarkTheme } = useTheme();
    const styles = isDarkTheme ? darkStyles : lightStyles;

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color={styles.backButtonIconColor?.color || '#000'} />
                <Text style={styles.backButtonText}>Назад</Text>
            </TouchableOpacity>



            <Text style={styles.txt_email}>Test text email</Text>

            <Text style={styles.txt_password}>test text password</Text>





        </SafeAreaView>
    );
}
