import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import {useTheme} from "../../styles/Theme";
import {Ionicons} from "@expo/vector-icons";

const screenWidth = Dimensions.get('window').width;

export default function CalendarScreen({ navigation }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const { isDarkTheme } = useTheme();
    const styles = isDarkTheme ? darkStyles : lightStyles;

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const changeMonth = (offset) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
        setCurrentDate(newDate);
    };

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }

        return days;
    };

    const renderDay = (day, index) => {
        const today = new Date();
        const isToday =
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();

        return (
            <View key={index} style={styles.dayContainer}>
                <Text style={[styles.dayText, isToday && styles.today]}>
                    {day || ''}
                </Text>
            </View>
        );
    };

    const days = getDaysInMonth(currentDate);


    return (
        <SafeAreaView style={styles.container}>


            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color={styles.backButtonIconColor?.color || '#000'} />
                <Text style={styles.backButtonText}>Назад</Text>
            </TouchableOpacity>


            <View style={styles.header}>
                <TouchableOpacity onPress={() => changeMonth(-1)}>
                    <Text style={styles.navText}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.monthText}>
                    {currentDate.toLocaleString('default', { month: 'long' })}{' '}
                    {currentDate.getFullYear()}
                </Text>
                <TouchableOpacity onPress={() => changeMonth(1)}>
                    <Text style={styles.navText}>{'>'}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.weekRow}>
                {daysOfWeek.map((day, index) => (
                    <Text key={index} style={styles.weekDay}>
                        {day}
                    </Text>
                ))}
            </View>

            <View style={styles.daysGrid}>
                {days.map((day, index) => renderDay(day, index))}
            </View>

        </SafeAreaView>
    );
}

const baseStyles = {
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    navText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    monthText: {
        fontSize: 20,
        fontWeight: '600',
    },
    weekRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    weekDay: {
        width: '14%',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    daysGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    dayContainer: {
        width: screenWidth / 7,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayText: {
        fontSize: 16,
    },
    today: {
        backgroundColor: '#4caf50',
        color: '#fff',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    toggleButton: {
        marginTop: 20,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#2196f3',
        borderRadius: 10,
    },
    toggleText: {
        color: '#fff',
        fontWeight: 'bold',
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
};

const lightStyles = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#ffffff',
    },
});

const darkStyles = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#1a1a1a',
    },
    navText: {
        ...baseStyles.navText,
        color: '#fff',
    },
    monthText: {
        ...baseStyles.monthText,
        color: '#fff',
    },
    weekDay: {
        ...baseStyles.weekDay,
        color: '#ccc',
    },
    dayText: {
        ...baseStyles.dayText,
        color: '#eee',
    },
    toggleText: {
        ...baseStyles.toggleText,
        color: '#fff',
    },
    backButtonText: {
        ...baseStyles.backButtonText,
        color: '#ffffff',
    },
    backButtonIconColor: {
        color: '#ffffff',
    },
});

