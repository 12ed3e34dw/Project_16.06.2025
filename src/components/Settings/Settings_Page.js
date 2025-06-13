import React, { useState,useEffect, } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';

export default function SettingsPage() {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkStyles : lightStyles;

    return (
        <View style={styles.container }>

        </View>
    );
}

const darkStyles =StyleSheet.create({

});

const lightStyles =StyleSheet.create({

});
