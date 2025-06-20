import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput, Dimensions, Alert, Button } from 'react-native';
import { useTheme } from '../../styles/Theme';
export default function Authorization({ navigation }) {
    const { isDarkTheme } = useTheme();
    const styles = isDarkTheme ? darkStyles : lightStyles;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');


    const handleAuth = () => {
        if (email === '' || !email.includes('@') || !email.includes('.')) {
            Alert.alert('Помилка', 'Некоректний email');
            return;
        }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.main_text}>Authorization</Text>
            <Text style={styles.text_email}>Введите электронная почта</Text>
            <TextInput
                style={styles.input_email}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.text_password}>Введите пароль</Text>
            <TextInput
                style={styles.input_password}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Text style={styles.text_password_1}>Повторите введенный пароль</Text>
            <TextInput
                style={styles.input_password_1}
                placeholder="Password"
                secureTextEntry
                value={password1}
                onChangeText={setPassword1}
            />

            <TouchableOpacity onPress={handleAuth}>
                <View style={styles.button_Auth}>
                    <Text style={styles.button_text}>Войти</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.text_url_regist}>Создать аккаунт</Text>
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
        top:'33%',
        left:'5%',
    },
    text_password:{
        top:'36%',
        left:'5%',
    },
    text_password_1:{
        top:'40%',
        left:'5%',
    },

});


const lightStyles=StyleSheet.create({

});

