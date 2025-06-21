import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Alert,
} from 'react-native';
import { useTheme } from '../../styles/Theme';

export default function Registration_Page({ navigation }) {
    const { isDarkTheme } = useTheme();
    const styles = isDarkTheme ? darkStyles : lightStyles;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');

    const handleRegister = () => {
        if (!email || !email.includes('@') || !email.includes('.')) {
            Alert.alert('Помилка', 'Некоректний email');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Помилка', 'Пароль повинен містити щонайменше 6 символів');
            return;
        }

        if (password !== password1) {
            Alert.alert('Помилка', 'Паролі не співпадають');
            return;
        }

        Alert.alert('Успіх', 'Акаунт створено!');
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.main_text}>Реєстрація</Text>

            <Text style={styles.text_email}>Електронна пошта</Text>
            <TextInput
                style={styles.input_email}
                placeholder="Email"
                placeholderTextColor={isDarkTheme ? '#ccc' : '#666'}
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
            />

            <Text style={styles.text_password}>Пароль</Text>
            <TextInput
                style={styles.input_password}
                placeholder="Пароль"
                placeholderTextColor={isDarkTheme ? '#ccc' : '#666'}
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />

            <Text style={styles.text_password_1}>Повторіть пароль</Text>
            <TextInput
                style={styles.input_password_1}
                placeholder="Повторно пароль"
                placeholderTextColor={isDarkTheme ? '#ccc' : '#666'}
                secureTextEntry
                onChangeText={setPassword1}
                value={password1}
            />

            <TouchableOpacity style={styles.button_Regist} onPress={handleRegister}>
                <Text style={styles.button_text}>Створити акаунт</Text>
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
        top:'25%',
        left:'5%',
    },
    text_password:{
        top:'28%',
        left:'5%',
    },
    text_password_1:{
        top:'31%',
        left:'5%',
    },
});


const lightStyles=StyleSheet.create({

});
