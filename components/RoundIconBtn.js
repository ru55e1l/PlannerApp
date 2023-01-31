import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import colors from '../components/colors';
import { AntDesign } from '@expo/vector-icons';

const RoundIconBtn = ({ antIconName, size, color, style, onPress }) => {
    return (
        <AntDesign
            name={antIconName}
            size={size || 24}
            color={color || colors.primary}
            style={[styles.icon, { ...style }]}
            onPress={onPress }
        />
    )
}
const styles = StyleSheet.create({
    icon: {
        backgroundColor: 'transparent',
        padding: 15,
        borderRadius: 200,
    }
})
export default RoundIconBtn;