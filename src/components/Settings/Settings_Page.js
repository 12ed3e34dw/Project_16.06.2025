import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../../styles/Theme';
import { Ionicons } from '@expo/vector-icons'; // Иконки Expo
//import { loadLanguage, changeLanguage } from '../i18n/locales/index';
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {StatusBar} from "expo-status-bar";


export default function SettingsPage({ navigation }) {
    const { isDarkTheme, toggleTheme } = useTheme();
    const [selected, setSelected] = React.useState(null);
    const styles = isDarkTheme ? darkStyles : lightStyles;
    const {t} = useTranslation();

    // const handleLanguageChange = (lang) => {
    //     console.log(lang)
    //     changeLanguage(lang);
    // }
    //
    // useEffect(() => {
    //     loadLanguage();
    // }, []);
    //






    return (
        <View style={styles.container}>
            {/* Кнопка ← Назад */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color={styles.backButtonIconColor?.color || '#000'} />
                <Text style={styles.backButtonText}>Назад</Text>
            </TouchableOpacity>

            <View style={styles.themeRow}>
                <Text style={styles.txt_styles}>Theme</Text>
                <Switch
                    style={styles.switch_button}
                    value={isDarkTheme}
                    onValueChange={toggleTheme}
                    trackColor={{ false: '#767577', true: '#767577' }}
                    thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                />
            </View>

            <View style={styles.themeLabels}>
                <Text style={styles.txt_dark_style}>🌙 Dark</Text>
                <Text style={styles.txt_light_style}>☀️ Light</Text>
            </View>

            <Text style={styles.txt_languages}>Language</Text>
            <Picker
                selectedValue={selected}
                onValueChange={(itemValue) => setSelected(itemValue)}
                style={styles.picker_languages}
            >
                <Picker.Item label={t('English')} value="1"  onPress={()=>{handleLanguageChange('en')}} />
                <Picker.Item label={t('Ukraine')} value="2" onPress={()=>{handleLanguageChange('uk')}}/>
                <StatusBar style="auto"/>
            </Picker>
        </View>
    );
}



const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    themeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    themeLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    txt_styles: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    txt_dark_style: {
        fontSize: 16,
        left:-10,
    },
    txt_light_style: {
        left: -140,
        fontSize: 16,
    },
    txt_languages: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
    },
    picker_languages: {
        height: 50,
        width: '100%',
    },
    switch_button: {
        top: 45,
        left: -220,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        left:-20,
        top:-10,
        width: '200%',
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignSelf: 'flex-start',
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
        color:'#1a1a1a',
    },
});

const darkStyles = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#1a1a1a',
    },
    txt_styles: {
        ...baseStyles.txt_styles,
        color: '#ffffff',
    },
    txt_dark_style: {
        ...baseStyles.txt_dark_style,
        color: '#ffffff',
    },
    txt_light_style: {
        ...baseStyles.txt_light_style,
        color: '#ffffff',
    },
    txt_languages: {
        ...baseStyles.txt_languages,
        color: '#ffffff',
    },
    picker_languages: {
        ...baseStyles.picker_languages,
        color: '#ffffff',
        backgroundColor: '#2a2a2a',
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
    txt_styles: {
        ...baseStyles.txt_styles,
        color: '#000000',
    },
    txt_dark_style: {
        ...baseStyles.txt_dark_style,
        color: '#000000',
    },
    txt_light_style: {
        ...baseStyles.txt_light_style,
        color: '#000000',
    },
    txt_languages: {
        ...baseStyles.txt_languages,
        color: '#000000',
    },
    picker_languages: {
        ...baseStyles.picker_languages,
        color: '#000000',
        backgroundColor: '#f5f5f5',
    },
    backButtonText: {
        ...baseStyles.backButtonText,
        color: '#000000',
    },
    backButtonIconColor: {
        color: '#000000',
    },
});
