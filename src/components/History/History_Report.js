import React, { useState,useEffect, } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useTheme} from "../../styles/Theme";
import {Ionicons} from "@expo/vector-icons"; // Обёртка контекста темы

export default function History({ navigation }) {

    const { isDarkTheme } = useTheme();
    const styles = isDarkTheme ? darkStyles : lightStyles;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color={styles.backButtonIconColor?.color || '#000'} />
                <Text style={styles.backButtonText}>Назад</Text>
            </TouchableOpacity>
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
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        left:-20,
        top:10,
        width: '200%',
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignSelf: 'flex-start',
        backgroundColor: '#1a1a1a',
    },
});


const darkStyles = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#1a1a1a',
    },
    backButtonIconColor: {
        color: '#ffffff',
    },
    backButtonText: {
        ...baseStyles.backButtonText,
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
});
