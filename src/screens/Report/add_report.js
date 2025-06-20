import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Dimensions, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { useTheme } from '../../styles/Theme';
import {Ionicons} from "@expo/vector-icons";


export default function Add_report({ navigation }) {
    const [description, setDescription] = useState('');
    const [imageUri, setImageUri] = useState(null);
    const [location, setLocation] = useState(null);
    const [date, setDate] = useState('');
    const { isDarkTheme } = useTheme();
    const styles = isDarkTheme ? darkStyles : lightStyles;

    useEffect(() => {
        const now = new Date();
        setDate(now.toISOString());

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Помилка', 'Доступ до геолокації заборонено');
                return;
            }

            const loc = await Location.getCurrentPositionAsync({});
            setLocation(loc.coords);
        })();
    }, []);

    const takePhoto = async () => {
        const permission = await ImagePicker.requestCameraPermissionsAsync();
        if (permission.status !== 'granted') {
            Alert.alert('Помилка', 'Потрібен дозвіл на камеру');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            quality: 0.5,
            base64: false,
        });

        if (!result.cancelled) {
            setImageUri(result.uri);
        }
    };

    const handleSave = async () => {
        console.log('Поля перед перевіркою:', { description, imageUri, location });

        if (!description.trim() || !imageUri || !location) {
            Alert.alert('Помилка', 'Заповніть всі поля');
            return;
        }

        const reportData = {
            description,
            imageUri,
            date,
            latitude: location.latitude,
            longitude: location.longitude,
        };

        console.log('Збереження правопорушення:', reportData);


    };
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Помилка', 'Доступ до геолокації заборонено');
            return;
        }

        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc.coords);
        Alert.alert('Геолокація отримана', `Широта: ${loc.coords.latitude}, Довгота: ${loc.coords.longitude}`);
    };


    return (
        <View style={styles.container}>


            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color={styles.backButtonIconColor?.color || '#000'} />
                <Text style={styles.backButtonText}>Назад</Text>
            </TouchableOpacity>







            <Text style={styles.title}>Додати правопорушення</Text>

            <TouchableOpacity style={styles.button} onPress={takePhoto}>
                <Text style={styles.buttonText}>📷 Зробити фото</Text>
            </TouchableOpacity>

            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

            <TextInput
                placeholder="Опис порушення"
                style={styles.input}
                placeholderTextColor={isDarkTheme ? '#ccc' : '#666'}
                value={description}
                onChangeText={setDescription}
            />

            <TouchableOpacity style={styles.button} onPress={getLocation}>
                <Text style={styles.buttonText}>Отримати геолокацію</Text>
            </TouchableOpacity>

            {location && (
                <Text style={{ color: isDarkTheme ? '#ccc' : '#333', marginTop: 8 }}>
                     Геолокація: {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
                </Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>💾 Зберегти</Text>
            </TouchableOpacity>
        </View>

    );
}

const screenWidth = Dimensions.get('window').width;

const baseStyles = {
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#4caf50',
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',

    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 8,
        padding: 10,
        marginTop: 12,
        fontSize: 16,
    },
    image: {
        width: screenWidth - 40,
        height: 200,
        borderRadius: 8,
        marginTop: 10,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        left:-20,
        top:10,
        width: '200%',
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignSelf: 'flex-start',
    },
};

const darkStyles = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#121212',
    },
    title: {
        ...baseStyles.title,
        color: '#fff',
    },
    input: {
        ...baseStyles.input,
        backgroundColor: '#1f1f1f',
        color: '#fff',
    },
    backButtonIconColor: {
        color: '#ffffff',
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
        backgroundColor: '#f9f9f9',
    },
    title: {
        ...baseStyles.title,
        color: '#000',
    },
    input: {
        ...baseStyles.input,
        backgroundColor: '#fff',
        color: '#000',
    },
});
