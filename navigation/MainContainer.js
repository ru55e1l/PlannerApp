import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// Screens
import CalendarScreen from './screens/CalendarScreen';
import SelectedDateScreen from './screens/CalendarStack/SelectedDateScreen';
import NotesScreen from './screens/NotesScreen';
import colors from '../components/colors';

//Screen names
const calendarName = "Calendar";
const notesName = "Notes";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MyTheme = {
    ...DefaultTheme,
    colors: {
        primary: colors.primary,
        background: colors.background,
        card: colors.secondaryBackground,
        text: colors.textColor,
        border: colors.border,
        notification: 'rgb(255, 69, 58)',
    },
};
const CustomTabParButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: 15,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10,
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 100,
            height: 60,
            borderRadius: 35,
            backgroundColor: '#e32f45'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);
const CalendarStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#191919',
                },
                headerTintColor: '#f9f9f9'
            }}
        >
            <Stack.Screen
                name="CalendarScreen"
                component={CalendarScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SelectedDateScreen"
                component={SelectedDateScreen}
                options={({ route }) => ({
                    title: route.params?.title,
                })}
            />
        </Stack.Navigator>
    );
};

function MainContainer() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
                initialRouteName={calendarName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === calendarName) {
                            iconName = focused ? 'calendar' : 'calendar-outline';

                        } else if (rn === notesName) {
                            iconName = focused ? 'list' : 'list-outline';

                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} style={{top: 15}} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "white",
                    tabBarLabelStyle: {
                        showLabel: false
                    },
                    tabBarShowLabel: false,
                    tabBarStyle:[{
                        position: 'absolute',
                        bottom: 0,
                        elevation: 10,
                        margin: 'auto',
                        backgroundColor: colors.backgroundSecondary,
                        alignSelf: 'center',
                        borderRadius: 0,
                        height: 60,
                        width: '100%',
                        display: getTabBarVisibility(route),
                        },
                        null]
                })}>


                <Tab.Screen name={calendarName} component={CalendarStack} options={{ headerShown: false }} />
                <Tab.Screen name={notesName} component={NotesScreen} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    shadow: {
        elevation: 5
    }
})
const getTabBarVisibility = route => {

    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    if (routeName == 'SelectedDateScreen') {
        return 'none';
    }
    return 'flex';
};
export default MainContainer;