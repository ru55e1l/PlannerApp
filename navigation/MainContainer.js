import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import CalendarScreen from './screens/CalendarScreen';
import NotesScreen from './screens/NotesScreen';
import SettingsScreen from './screens/SettingsScreen';

//Screen names
const calendarName = "Calendar";
const notesName = "Notes";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();
const MyTheme = {
    ...DefaultTheme,
    colors: {
        primary: 'rgb(255, 45, 85)',
        background: '#000000',
        card: '#191919',
        text: 'rgb(28, 28, 30)',
        border: 'transparent',
        notification: 'rgb(255, 69, 58)',
    },
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

                        } else if (rn === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "white",
                    tabBarLabelStyle: {
                        "paddingBottom": 0,
                        "fontSize": 10
                    },
                    tabBarStyle: [
                        {
                            "display": "flex"
                        },
                        null
                    ]
                })}>

                <Tab.Screen name={calendarName} component={CalendarScreen} options={{ headerShown: false }} />
                <Tab.Screen name={notesName} component={NotesScreen} options={{ headerShown: false }} />
                <Tab.Screen name={settingsName} component={SettingsScreen} options={{ headerShown: false }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;