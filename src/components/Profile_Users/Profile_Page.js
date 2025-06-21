
import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../../styles/Theme';
import { Ionicons } from '@expo/vector-icons';

const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 12,
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
        marginVertical: 10,
        fontSize: 16,
    },
    label: {
        fontSize: 14,
        marginTop: 20,
        marginBottom: 4,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
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
    label: {
        ...baseStyles.label,
        color: '#ccc',
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
    label: {
        ...baseStyles.label,
        color: '#333',
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
    const { isDarkTheme } = useTheme();
    const styles = isDarkTheme ? darkStyles : lightStyles;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const storedEmail = await AsyncStorage.getItem('email');
                const storedPassword = await AsyncStorage.getItem('password');

                if (storedEmail) setEmail(storedEmail);
                if (storedPassword) setPassword(storedPassword);
            } catch (error) {
                console.log('Ошибка при загрузке данных из AsyncStorage:', error);
            }
        };
        loadUserData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color={styles.backButtonIconColor?.color || '#000'}/>
                <Text style={styles.backButtonText}>Назад</Text>
            </TouchableOpacity>
            <Text style={styles.label}>Електронна пошта</Text>
            <TextInput style={styles.txt_email} value={email} editable={false}/>
            <Text style={styles.label}>Пароль</Text>
            <TextInput style={styles.txt_password} value={password} secureTextEntry editable={false}/>
        </SafeAreaView>
    );
}
