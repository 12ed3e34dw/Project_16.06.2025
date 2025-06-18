import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    SectionList,
} from 'react-native';

export default function SettingsPage({ navigation }) {
    const [selected, setSelected] = useState(null);
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkStyles : lightStyles;


    return (
        <View style={styles.container}>

            <Text style={styles.txt_styles}>Style </Text>
            <Text style={styles.txt_dark_style}>🌙 Dark style</Text>
            <Text style={styles.txt_light_style}>☀️ Light style</Text>




        </View>
    );
}

const screenWidth = Dimensions.get('window').width;

const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 12,
    },

});

const darkStyles = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#1a1a1a',
    },
    txt_dark_style: {
        color: '#ffffff',
        fontSize: 16,
        top:20,
    },
    txt_light_style: {
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 10,
        left:190,

    },
    txt_styles:{
        color: '#ffffff',
        fontSize: 25,
        fontWeight: '600',
    },
});

const lightStyles = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#ffffff',
    },
    txt_dark_style: {
        color: '#000000',
        fontSize: 16,
    },
    txt_light_style: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 10,
    },
    header: {
        ...baseStyles.header,
        color: '#000000',
    },
    itemText: {
        color: '#000000',
    },
});

