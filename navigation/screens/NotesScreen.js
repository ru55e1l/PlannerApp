import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, StatusBar } from 'react-native';
import colors from '../../components/colors'
import RoundIconBtn from '../../components/RoundIconBtn';
import Searchbar from '../../components/Searchbar';


const NoteScreen = () => {
    return (
        <>
        <SafeAreaView style={styles.container}>
                <RoundIconBtn
                    antIconName='plus'
                    style={styles.addBtn}
                    onPress={() => console.log('open notes modal')}
                />
                <Text style={styles.header}>Notes</Text>
                <Searchbar containerStyle={{ marginVertical: 25 }} />
                <View style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
                    <Text style={styles.emptyHeader}>ADD NOTES</Text>
                </View>
        </SafeAreaView>
        </>
    );
};
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
    emptyHeader: {
        fontSize: 35,
        color: colors.textColor,
        opacity: 0.3,
        fontWeight: 'bold',
    },
    emptyHeaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
    },
    addBtn: {
        position: 'absolute',
        right: 0,
        top: 40,
        zIndex: 3,
    }
});
export default NoteScreen;