import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';

import foto from "../../assets/foto_calendar.png";
import foto_1 from "../../assets/foto_Map.png";
import foto_2 from "../../assets/foto_profile.png";
import foto_3 from "../../assets/foto_add.png";
import foto_4 from "../../assets/foto_settings.png";
import foto_5 from "../../assets/foto_history.png";





export default function MainPage({ navigation }) {
    const [isDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkStyles : lightStyles;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
                <View style={styles.container_Calendar}>
                    <Image source={foto} style={styles.image} />
                    <Text style={styles.text_cont_calendar}>Calendar</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                <View style={styles.container_Map_reported}>
                    <Image source={foto_1} style={styles.image_1} />
                    <Text style={styles.text_cont_map_reported}>Map</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <View style={styles.container_settings}>
                    <Image source={foto_4} style={styles.image_4} />
                    <Text style={styles.text_cont_settings}>Settings</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View style={styles.container_Profile}>
                    <Image source={foto_2} style={styles.image_2} />
                    <Text style={styles.text_cont_profile}>Profile</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>{navigation.navigate('Add_report')}}>
                <View style={styles.container_Todo_Page}>
                    <Image source={foto_3} style={styles.image_3} />
                    <Text style={styles.text_cont_todo}>Add Reported</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>{navigation.navigate('History')}}>
          <View style={styles.container_history}>
              <Image source={foto_5} style={styles.image_5}/>
              <Text style={styles.text_cont_history}>History</Text>
          </View>
            </TouchableOpacity>
        </View>
    );
}

const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    container_Calendar: {
        left: 20,
        width: 390,
        height: 50,
        marginTop: 130,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000',
        padding: 10,
    },
    text_cont_calendar: {
        left: 55,
        top: -45,
        color: 'black',
    },
    container_Map_reported: {
        left: 20,
        width: 390,
        height: 50,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000',
        padding: 10,
    },
    text_cont_map_reported: {
        left: 55,
        top: -45,
        color: 'black',
    },
    container_Profile: {
        left: 20,
        width: 390,
        height: 50,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000',
        padding: 10,
    },
    container_settings: {
        left: 20,
        width: 390,
        height: 50,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000',
        padding: 10,
    },
    text_cont_settings: {
        left: 55,
        top: -45,
        color: 'black',
    },
    text_cont_profile: {
        left: 55,
        top: -45,
        color: 'black',
    },
    container_Todo_Page: {
        left: 20,
        width: 390,
        height: 50,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000',
        padding: 10,
    },
    text_cont_todo: {
        top: -50,
        left: 50,
        width: 48,
        height: 48,
        color: 'black',
    },
    image: {
        top: -10,
        width: 48,
        height: 48,
    },
    image_1: {
        top: -15,
        width: 48,
        height: 48,
    },
    image_2: {
        top: -10,
        width: 48,
        height: 48,
    },
    image_3: {
        top: -10,
        width: 48,
        height: 48,
    },
    image_4: {
        top: -10,
        width: 48,
        height: 48,
    },
    testButtonContainer: {
        marginTop: 20,
        paddingHorizontal: 20,

    },
    container_history:{
        left: 20,
        marginTop: 20,
        width: 390,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000',
    },
    text_cont_history:{
        left:70,
        top:-35,
    },
    image_5:{
        top: -3,
        left:10,
        width: 48,
        height: 48,
    },
});

const lightStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    // ... остальные стили для светлой темы
});
