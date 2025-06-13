import React, { useState,useEffect, } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';





import foto from "../../assets/foto_calendar.png";
import foto_1 from "../../assets/foto_Map.png";
import foto_2 from "../../assets/foto_profile.png";
import foto_3 from "../../assets/foto_add.png";
import foto_4 from "../../assets/foto_settings.png";




export default function Main_Page() {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkStyles : lightStyles;


    return (
        <View style={styles.container }>
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.container_Calendar}>
                    <Image source={foto} style={styles.image} />
                    <Text style={styles.text_cont_calendar}>
                        Calendar
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
                <View style={styles.container_Map_reported}>
                    <Image source={foto_1} style={styles.image_1} />
                    <Text style={styles.text_cont_map_reported}>
                        Map Reported
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
                <View style={styles.container_settings}>
                    <Image source={foto_4} style={styles.image_4} />
                    <Text style={styles.text_cont_settings}>
                        Settings
                    </Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => {}}>
                <View style={styles.container_Profile}>
                    <Image source={foto_2} style={styles.image_2} />
                    <Text style={styles.text_cont_profile}>
                        Profile
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
                <View style={styles.container_Todo_Page}>
                    <Image source={foto_3} style={styles.image_3} />
                    <Text style={styles.text_cont_todo}>
                        Add Reported
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}


const darkStyles=StyleSheet.create({
    container: {},
    container_Calendar:{
        left:20,
        width:390,
        height:50,
        top:250,
        backgroundColor:'white',
        borderRadius:5,
        borderWidth: 2,          // товщина рамки
        borderColor: '#000',     // колір рамки (чорна)
        padding: 10,
    },
    text_cont_calendar:{
        left:55,
        top:-45,
    },
    container_Map_reported:{
        left:20,
        width:390,
        height:50,
        top:270,
        backgroundColor:'white',
        borderRadius:5,
        borderWidth: 2,          // товщина рамки
        borderColor: '#000',     // колір рамки (чорна)
        padding: 10,

    },
    text_cont_map_reported:{
        left:55,
        top:-45,
    },
    container_Profile:{
        left:20,
        width:390,
        height:50,
        top:240,
        backgroundColor:'white',
        borderRadius:5,
        borderWidth: 2,          // товщина рамки
        borderColor: '#000',     // колір рамки (чорна)
        padding: 10,
    },
    container_settings:{
        left:20,
        width:390,
        height:50,
        top:410,
        backgroundColor:'white',
        borderRadius:5,
        borderWidth: 2,          // товщина рамки
        borderColor: '#000',     // колір рамки (чорна)
        padding: 10,
    },
    text_cont_settings:{
        left:55,
        top:-45,
    },
    text_cont_profile:{
        left:55,
        top:-45,
    },
    container_Todo_Page:{
        left:20,
        width:390,
        height:50,
        top:250,
        backgroundColor:'white',
        borderRadius:5,
        borderWidth: 2,          // товщина рамки
        borderColor: '#000',     // колір рамки (чорна)
        padding: 10,             // відступи всередині
    },
    text_cont_todo:{
        top:-50,
        left:50,
        width:48,
        height:48,
    },
    image:{
        top:-10,
        width:48,
        height:48,
    },
    image_1:{
        top:-15,
        width:48,
        height:48,
    },
    image_2:{
        top:-10,
        width:48,
        height:48,
    },
    image_3:{
        top:-10,
        width:48,
        height:48,
    },

    image_4:{
        top:-10,
        width:48,
        height:48,
    },
});

const lightStyles=StyleSheet.create({

});