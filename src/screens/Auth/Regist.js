import React, { useState,useEffect, } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';
import { useTheme } from '../../styles/Theme';


export default function Registration_Page() {

    const { isDarkTheme } = useTheme();
    const styles = isDarkTheme ? darkStyles : lightStyles;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');


    const Forms = () => {
        if (email === '' || !email.includes('@') || !email.includes('.')) {
            Alert.alert('Помилка', 'Некоректний email');
            return;
        }
        if (password !== password1) {
            Alert.alert('Помилка', 'Паролі не співпадають');
            return;
        }
        if (phone.length < 10) {
            Alert.alert('Помилка', 'Некоректний номер телефону');
            return;
        }
    };


    return (
        <View style={  styles.container }>
            <Text style={ styles.main_text}>Registration</Text>
            <Text style={styles.text_email}>Введите электронная почта </Text>
            <TextInput style={styles.input_email} placeholder="Email" onChangeText={setEmail}/>
            <Text style={styles.text_password}>Введите пароль</Text>
            <TextInput style={styles.input_password} placeholder="Password"  secureTextEntry onChangeText={setPassword}/>
            <Text style={styles.text_password_1}>Повторите введенный пароль</Text>
            <TextInput style={styles.input_password_1} placeholder="Password"  secureTextEntry onChangeText={setPassword1}/>
            <TouchableOpacity>
                <View style={styles.button_Regist}>
                    <Text style={styles.button_text}>Создать аккаунт</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}

const darkStyles=StyleSheet.create({
    button_Regist: {
        width:260,
        height:80,
        backgroundColor: '#333',
        top:260,
        left:75,
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
    text_email: {
        top:'35%',
        left:'5%',
    },
    text_password:{
        top:'40%',
        left:'5%',
    },
    text_password_1:{
        top:'45%',
        left:'5%',
    },
});


const lightStyles=StyleSheet.create({

});
