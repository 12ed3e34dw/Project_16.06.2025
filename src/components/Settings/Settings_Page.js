import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../../styles/Theme';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsPage({ navigation }) {
    const { isDarkTheme, toggleTheme } = useTheme();
    const [selected, setSelected] = React.useState(null);
    const styles = isDarkTheme ? darkStyles : lightStyles;

    return (
        <View style={styles.container}>
            {/* Улучшенная кнопка "Назад" */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}
            >
                <Ionicons
                    name="chevron-back"
                    size={24}
                    color={isDarkTheme ? '#fff' : '#000'}
                />
                <Text style={styles.backButtonText}>Назад</Text>
            </TouchableOpacity>

            <View style={styles.themeRow}>
                <Text style={styles.txt_styles}>Thema</Text>
                <Switch
                    style={styles.switch_button}
                    value={isDarkTheme}
                    onValueChange={toggleTheme}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                />
            </View>

            <View style={styles.themeLabels}>
                <Text style={styles.txt_dark_style}>🌙 Темная</Text>
                <Text style={styles.txt_light_style}>☀️ Светлая</Text>
            </View>

            <Text style={styles.txt_languages}>Language</Text>
            <Picker
                selectedValue={selected}
                onValueChange={(itemValue) => setSelected(itemValue)}
                style={styles.picker_languages}
                dropdownIconColor={isDarkTheme ? '#fff' : '#000'}
            >
                <Picker.Item label="English" value="1" />
                <Picker.Item label="Українська" value="2" />
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
        left: -170,
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
        left: -260,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
    backButtonText: {
        fontSize: 18,
        marginLeft: 5,
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
});
