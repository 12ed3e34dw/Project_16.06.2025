import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Alert
} from 'react-native';
import { useTheme } from '../../styles/Theme';
import { useAuth } from './AuthContext';

export default function Authorization({ navigation }) {
    const { isDarkTheme } = useTheme();
    const styles = isDarkTheme ? darkStyles : lightStyles;

    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleAuth = async () => {
        if (!email || !email.includes('@') || !email.includes('.')) {
            Alert.alert('Помилка', 'Некоректний email');
            return;
        }
        if (!password || password.length < 6) {
            Alert.alert('Помилка', 'Пароль занадто короткий');
            return;
        }
        await login();
        Alert.alert('Успіх', 'Авторизація пройдена!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.main_text}>Авторизація</Text>

            <Text style={styles.text_email}>Електронна пошта</Text>
            <TextInput style={styles.input_email} placeholder="Email" placeholderTextColor={isDarkTheme ? '#ccc' : '#666'} value={email} onChangeText={setEmail} keyboardType="email-address"/>
            <Text style={styles.text_password}>Пароль</Text>
            <TextInput style={styles.input_password} placeholder="Пароль" placeholderTextColor={isDarkTheme ? '#ccc' : '#666'} secureTextEntry value={password} onChangeText={setPassword}/>
            <TouchableOpacity onPress={handleAuth} style={styles.button_Auth}>
                <Text style={styles.button_text}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                <Text style={styles.text_url_regist}>Створити акаунт</Text>
            </TouchableOpacity>
        </View>
    );
}



const darkStyles=StyleSheet.create({
    button_Auth: {
        width:180,
        height:80,
        backgroundColor: '#333',
        top:260,
        left:125,
        borderRadius:10,
    },
    button_text: {
        top:30,
        left:70,
        color:'white',

    },
    input_email: {
        top:160,
        left:10,
        width:"95%",
        height:"15%",
        borderWidth: 2,
        borderColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    input_password: {
        top:180,
        left:10,
        width:"95%",
        height:"15%",
        borderWidth: 2,
        borderColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    input_password_1: {
        top:200,
        left:10,
        width:"95%",
        height:"15%",
        borderWidth: 2,
        borderColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    main_text: {
        top:'15%',
        left:'35%',
        fontSize:20,
    },
    text_url_regist: {
        top:'1500%',
        left:'35%',
        color:'blue',
    },
    text_email: {
        top:'25%',
        left:'5%',
    },
    text_password:{
        top:'38%',
        left:'5%',
    },


});


const lightStyles=StyleSheet.create({

});

