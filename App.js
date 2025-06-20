import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from "./src/screens/Auth/Auth"; // Импортируем экран аутентификации
import MainScreen from "./src/screens/Home/Main";
import CalendarScreen from "./src/components/Calendar/Calendar_Page";
import ProfileScreen from "./src/components/Profile_Users/Profile_Page";
import SettingsScreen from "./src/components/Settings/Settings_Page";
import HistoryScreen from "./src/components/History/History_Report";
import Add_reportScreen from "./src/screens/Report/add_report";
import Map_Screen from "./src/components/GeoLocation/Location";
import { Theme } from "./src/styles/Theme";
import { ReportsProvider } from "./src/screens/Report/ReportContext";
import Registration_Screen from "./src/screens/Auth/Regist";
import {AuthProvider,useAuth} from "./src/screens/Auth/AuthContext";
const Stack = createStackNavigator();

function AppNavigator() {
    const { isLoggedIn } = useAuth();

    return (
        <ReportsProvider>
            <Theme>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        {isLoggedIn ? (
                            <>
                                <Stack.Screen name="Home" component={MainScreen} />
                                <Stack.Screen name="Calendar" component={CalendarScreen} />
                                <Stack.Screen name="Settings" component={SettingsScreen} />
                                <Stack.Screen name="Profile" component={ProfileScreen} />
                                <Stack.Screen name="History" component={HistoryScreen} />
                                <Stack.Screen name="Add_report" component={Add_reportScreen} />
                                <Stack.Screen name="Map" component={Map_Screen} />
                            </>
                        ) : (
                            <>
                                <Stack.Screen name="Auth" component={AuthScreen} />
                                <Stack.Screen name="Registration" component={Registration_Screen} />
                            </>
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            </Theme>
        </ReportsProvider>
    );
}


export default function App() {
    return (
        <>
            <AuthProvider>
            <StatusBar style="auto" />
            <AppNavigator />
            </AuthProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
