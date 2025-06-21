import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, ScrollView, Linking} from 'react-native';
import { useTheme } from "../../styles/Theme";
import { Ionicons } from "@expo/vector-icons";
import { useReports } from "../../screens/Report/ReportContext";

export default function History({ navigation }) {
    const { isDarkTheme } = useTheme();
    const { reports } = useReports();
    const styles = isDarkTheme ? darkStyles : lightStyles;

    const violationTypes = {
        parking: 'Неправильна парковка',
        speeding: 'Перевищення швидкості',
        red_light: 'Проїзд на червоне',
        other: 'Інше порушення'
    };
    const handlePressReport = (report) => {
        navigation.navigate('ReportDetail', { report });
    };
    const openMaps = (lat, lng) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                Alert.alert('Помилка', 'Не вдалося відкрити карту');
            }
        });
    };
    const renderReportItem = ({ item }) => (
        <TouchableOpacity style={styles.reportItem} onPress={() => handlePressReport(item)} activeOpacity={0.7}>
            <Text style={styles.reportType}>
                {violationTypes[item.violationType] || 'Невідоме порушення'}
            </Text>
            <Text style={styles.reportDate}>
                {new Date(item.date).toLocaleString('uk-UA')}
            </Text>
            <Text style={styles.reportDesc} numberOfLines={2}>
                {item.description}
            </Text>
            <TouchableOpacity onPress={() => openMaps(item.latitude, item.longitude)} style={styles.mapButton}>
                <Text style={styles.mapButtonText}>Переглянути на мапі</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
                <Ionicons name="arrow-back" size={24} color={styles.backButtonIconColor?.color || '#000'}/>
                <Text style={styles.backButtonText}>Назад</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Історія порушень</Text>

            {reports.length === 0 ? (
                <Text style={styles.emptyText}>Немає збережених порушень</Text>
            ) : (
                <FlatList data={reports.sort((a, b) => new Date(b.date) - new Date(a.date))} keyExtractor={item => item.id} renderItem={renderReportItem} contentContainerStyle={styles.listContent}/>
            )}
        </View>
    );
}

// Детальный экран порушення
function ReportDetailScreen({ route, navigation }) {
    const { report } = route.params;
    const { isDarkTheme } = useTheme();
    const styles = isDarkTheme ? darkStyles : lightStyles;
    const violationTypes = {
        parking: 'Неправильна парковка',
        speeding: 'Перевищення швидкості',
        red_light: 'Проїзд на червоне',
        other: 'Інше порушення'
    };

    const openMaps = (lat, lng) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                Alert.alert('Помилка', 'Не вдалося відкрити карту');
            }
        });
    };

    return (
        <ScrollView style={styles.detailContainer}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}
            >
                <Ionicons
                    name="arrow-back"
                    size={24}
                    color={styles.backButtonIconColor?.color || '#000'}
                />
                <Text style={styles.backButtonText}>Назад</Text>
            </TouchableOpacity>

            <Text style={styles.detailTitle}>Деталі порушення</Text>

            <View style={styles.detailSection}>
                <Text style={styles.detailLabel}>Тип порушення:</Text>
                <Text style={styles.detailText}>
                    {violationTypes[report.violationType] || 'Невідоме порушення'}
                </Text>
            </View>

            <View style={styles.detailSection}>
                <Text style={styles.detailLabel}>Дата та час:</Text>
                <Text style={styles.detailText}>
                    {new Date(report.date).toLocaleString('uk-UA')}
                </Text>
            </View>

            <View style={styles.detailSection}>
                <Text style={styles.detailLabel}>Опис:</Text>
                <Text style={styles.detailText}>{report.description}</Text>
            </View>

            <View style={styles.detailSection}>
                <Text style={styles.detailLabel}>Локація:</Text>
                <Text style={styles.detailText}>
                    Широта: {report.latitude.toFixed(6)}
                    {'\n'}
                    Довгота: {report.longitude.toFixed(6)}
                </Text>
                <TouchableOpacity
                    style={styles.mapButton}
                    onPress={() => openMaps(report.latitude, report.longitude)}
                >
                    <Text style={styles.mapButtonText}>Відкрити в Google Maps</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const screenWidth = Dimensions.get('window').width;

const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingVertical: 8,
        top:10,
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
    },
    listContent: {
        paddingBottom: 20,
    },
    reportItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    reportType: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    reportDate: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    reportDesc: {
        fontSize: 16,
        color: '#444',
        marginBottom: 10,
    },
    mapButton: {
        backgroundColor: '#4285F4',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    mapButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    // Стили для детального экрана
    detailContainer: {
        flex: 1,
        padding: 20,
    },
    detailTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 25,
        textAlign: 'center',
        color: '#333',
    },
    detailSection: {
        marginBottom: 20,
    },
    detailLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#555',
    },
    detailText: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
    },
});

const darkStyles = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#121212',
    },
    backButtonText: {
        ...baseStyles.backButtonText,
        color: '#fff',
    },
    title: {
        ...baseStyles.title,
        color: '#fff',
    },
    emptyText: {
        ...baseStyles.emptyText,
        color: '#ccc',
    },
    reportItem: {
        ...baseStyles.reportItem,
        backgroundColor: '#1e1e1e',
    },
    reportType: {
        ...baseStyles.reportType,
        color: '#fff',
    },
    reportDate: {
        ...baseStyles.reportDate,
        color: '#aaa',
    },
    reportDesc: {
        ...baseStyles.reportDesc,
        color: '#ddd',
    },
    backButtonIconColor: {
        color: '#fff',
    },
    detailContainer: {
        ...baseStyles.detailContainer,
        backgroundColor: '#121212',
    },
    detailTitle: {
        ...baseStyles.detailTitle,
        color: '#fff',
    },
    detailLabel: {
        ...baseStyles.detailLabel,
        color: '#aaa',
    },
    detailText: {
        ...baseStyles.detailText,
        color: '#fff',
    },
});

const lightStyles = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#f5f5f5',
    },
    backButtonText: {
        ...baseStyles.backButtonText,
        color: '#000',
    },
    title: {
        ...baseStyles.title,
        color: '#000',
    },
    emptyText: {
        ...baseStyles.emptyText,
        color: '#666',
    },
    reportItem: {
        ...baseStyles.reportItem,
        backgroundColor: '#fff',
    },
    backButtonIconColor: {
        color: '#000',
    },
});

// Экспортируем оба компонента
export { History, ReportDetailScreen };
