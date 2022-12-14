import React, {useState, useEffect} from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, StyleSheet, TextInput,Keyboard} from 'react-native';
import {CalendarList, Agenda, CalendarProvider} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import dateFns from 'date-fns';



const calendarTheme = {
    calendarBackground: '#000000',

    selectedDayBackgroundColor: '#ffffff',
    selectedDayTextColor: '#191919',
    selectedDotColor: '#ffffff',

    dayTextColor: '#ffffff',
    textDisabledColor: '#ffffff',
    dotColor: '#DBE9EE',

    monthTextColor: '#DBE9EE',
    textMonthFontWeight: 'bold',

    arrowColor: '#DBE9EE',
}
const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

export default function CalendarScreen({ navigation }) {
    const [items, setItems] = React.useState({});
    const [event, setEvent] = React.useState('');
    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    };
    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
                <Card>
                    <Card.Content>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Text>{item.name}</Text>
                            <Avatar.Text label="RT" />
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };
    const onDayPress = (day) => {
        Keyboard.dismiss();
        setItems((items) => ({
            ...items,
            [day.dateString]: [{ text: event }],
        }));
    };
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <CalendarProvider date={''}>
                <Agenda
                    onDayPress={onDayPress}
                    theme={calendarTheme}
                    items={items}
                    loadItemsForMonth={loadItems}
                    renderItem={renderItem}
                    renderEmptyDate={() => (
                        <View style={styles.emptyDate}>
                            <Text>No items for this date</Text>
                        </View>
                    )}

                />
            </CalendarProvider>
        </SafeAreaView>
    );
}
