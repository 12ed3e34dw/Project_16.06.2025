import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import * as Location from 'expo-location';
import { useTheme } from '../../styles/Theme';
import { Ionicons } from "@expo/vector-icons";
import { useReports } from '../Report/ReportContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
export default function Add_report({ navigation }) {
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [violationType, setViolationType] = useState('parking');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const { isDarkTheme } = useTheme();
    const { addReport } = useReports();
    const styles = isDarkTheme ? darkStyles : lightStyles;

    useEffect(() => {
        getCurrentLocation();
    }, []);

    const getCurrentLocation = async () => {
        try {
            setIsLoading(true);

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Помилка', 'Доступ до геолокації заборонено');
                return;
            }

            const loc = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Balanced
            });

            setLocation(loc.coords);
            Alert.alert('Геолокація отримана',
                `Широта: ${loc.coords.latitude.toFixed(4)}, Довгота: ${loc.coords.longitude.toFixed(4)}`);

        } catch (error) {
            Alert.alert('Помилка', 'Не вдалося отримати геолокацію');
            console.error('Location error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    const handleSave = async () => {
        if (!description.trim()) {
            Alert.alert('Помилка', 'Будь ласка, введіть опис порушення');
            return;
        }

        if (!location) {
            Alert.alert('Помилка', 'Будь ласка, отримайте геолокацію');
            return;
        }

        try {
            setIsLoading(true);

            const reportData = {
                id: Date.now().toString(),
                description: description.trim(),
                violationType,
                date: date.toISOString(),
                latitude: location.latitude,
                longitude: location.longitude,
            };

            addReport(reportData);

            Alert.alert('Успіх', 'Порушення успішно збережено');
            navigation.goBack();

        } catch (error) {
            console.error('Save error:', error);
            Alert.alert('Помилка', 'Не вдалося зберегти порушення');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                    disabled={isLoading}
                >
                    <Ionicons
                        name="arrow-back"
                        size={24}
                        color={styles.backButtonIconColor?.color || '#000'}
                    />
                    <Text style={styles.backButtonText}>Назад</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Додати правопорушення</Text>

                {/* Picker для типа нарушения */}
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Тип порушення:</Text>
                    <Picker
                        selectedValue={violationType}
                        style={styles.picker}
                        onValueChange={(itemValue) => setViolationType(itemValue)}
                        mode="dropdown"
                    >
                        <Picker.Item label="Неправильна парковка" value="parking" />
                        <Picker.Item label="Перевищення швидкості" value="speeding" />
                        <Picker.Item label="Проїзд на червоне" value="red_light" />
                        <Picker.Item label="Інше порушення" value="other" />
                    </Picker>
                </View>

                {/* Поле для выбора даты */}
                <View style={styles.dateContainer}>
                    <Text style={styles.label}>Дата порушення:</Text>
                    <TouchableOpacity
                        style={styles.dateButton}
                        onPress={showDatepicker}
                    >
                        <Text style={styles.dateText}>
                            {date.toLocaleDateString('uk-UA')}
                        </Text>
                    </TouchableOpacity>
                </View>

                {showDatePicker && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                    />
                )}

                <TextInput
                    placeholder="Опис порушення"
                    style={styles.input}
                    placeholderTextColor={isDarkTheme ? '#ccc' : '#666'}
                    value={description}
                    onChangeText={setDescription}
                    multiline
                    numberOfLines={4}
                    editable={!isLoading}
                />

                <TouchableOpacity
                    style={[styles.button, isLoading && styles.disabledButton]}
                    onPress={getCurrentLocation}
                    disabled={isLoading}
                >
                    <Text style={styles.buttonText}>
                        {isLoading ? 'Отримання локації...' : 'Отримати геолокацію'}
                    </Text>
                </TouchableOpacity>

                {location && (
                    <Text style={styles.locationText}>
                        Геолокація: {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
                    </Text>
                )}

                <TouchableOpacity
                    style={[styles.saveButton, isLoading && styles.disabledButton]}
                    onPress={handleSave}
                    disabled={isLoading}
                >
                    <Text style={styles.buttonText}>
                        {isLoading ? 'Збереження...' : '💾 Зберегти'}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#4caf50',
        padding: 15,
        borderRadius: 10,
        marginTop: 15,
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    disabledButton: {
        opacity: 0.6,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 8,
        padding: 15,
        marginTop: 15,
        fontSize: 16,
        minHeight: 120,
        textAlignVertical: 'top',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingVertical: 8,
        alignSelf: 'flex-start',
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    locationText: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center',
    },
    pickerContainer: {
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 8,
        padding: 5,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: '500',
    },
    dateContainer: {
        marginTop: 15,
    },
    dateButton: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
    },
    dateText: {
        fontSize: 16,
    },
});

const darkStyles = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#121212',
    },
    scrollContainer: {
        ...baseStyles.scrollContainer,
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
        borderColor: '#444',
    },
    backButtonIconColor: {
        color: '#ffffff',
    },
    backButtonText: {
        ...baseStyles.backButtonText,
        color: '#ffffff',
    },
    locationText: {
        ...baseStyles.locationText,
        color: '#ccc',
    },
    pickerContainer: {
        ...baseStyles.pickerContainer,
        borderColor: '#444',
        backgroundColor: '#1f1f1f',
    },
    label: {
        ...baseStyles.label,
        color: '#fff',
    },
    dateButton: {
        ...baseStyles.dateButton,
        borderColor: '#444',
        backgroundColor: '#1f1f1f',
    },
    dateText: {
        ...baseStyles.dateText,
        color: '#fff',
    },
});

const lightStyles = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#f9f9f9',
    },
    scrollContainer: {
        ...baseStyles.scrollContainer,
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
    backButtonText: {
        ...baseStyles.backButtonText,
        color: '#000',
    },
    locationText: {
        ...baseStyles.locationText,
        color: '#333',
    },
    label: {
        ...baseStyles.label,
        color: '#000',
    },
});
