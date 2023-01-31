import React, { useState } from 'react';
import { CalendarList, CalendarProvider } from 'react-native-calendars';
import colors from '../../components/colors';
import {SafeAreaView, StyleSheet} from "react-native";
import RoundIconBtn from "../../components/RoundIconBtn";


const calendarTheme = {
    calendarBackground: colors.background,
    selectedDayTextColor: '#191919',
    selectedDotColor: colors.backgroundOpposite,
    dayTextColor: colors.backgroundOpposite,
    textDisabledColor: colors.backgroundOpposite,
    dotColor: colors.textColor,
    monthTextColor: colors.textColor,
    textMonthFontWeight: 'bold',
    arrowColor: colors.textColor,
}



export default function CalendarScreen({ navigation }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const markedDates = {
        [selectedDate]: { selected: true },
    };
    return (
        <SafeAreaView style={styles.container}>
            <RoundIconBtn
                antIconName='plus'
                style={styles.addBtn}
                onPress={() => console.log('open calendar modal')}
            />
            <CalendarProvider date={''}>
                <CalendarList
                    theme={calendarTheme}
                    markedDates={markedDates}
                    onDayPress={day => {
                        navigation.navigate('SelectedDateScreen');
                        setSelectedDate(day.dateString);
                        console.log('selected day', day);
                    }}
                    onDayLongPress={day => {
                        setSelectedDate(day.dateString);
                        console.log('selected day', day);
                    }}
                />
            </CalendarProvider>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
    },
    header: {
        color: colors.textColor,
        fontSize: 30,
        paddingLeft: 10,
        fontWeight: 'bold',
        zIndex: 0,
        flex: 0,
    },
    addBtn: {
        position: 'absolute',
        right: 0,
        top: 40,
        zIndex: 3,
    }
});
