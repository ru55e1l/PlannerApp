import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import colors from '../components/colors';

const Searchbar = ({ containerStyle }) => {
    return (
        <View style={[styles.container, {...containerStyle}]}>
            <TextInput style={ styles.searchbar } placeholder='Search..' />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {},
    searchbar: {
        borderWidth: 0.5,
        borderColor: colors.border,
        height: 40,
        borderRadius: 40,
        fontSize: 20,
        paddingLeft: 15,
        color: colors.background,
        backgroundColor: colors.backgroundOpposite,
    }
});
export default Searchbar;