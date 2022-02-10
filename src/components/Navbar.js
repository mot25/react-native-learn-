import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../theme';

export default function Navbar({ text }) {
    return (
        <View style={navbar}>
            <Text style={textS}>
                {text}
            </Text>
        </View>
    )
}

const { navbar, textS } = StyleSheet.create({
    navbar: {
        height: 100,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: THEME.MAIN_COLOR,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textS: {
        color: '#fff',
        fontSize: 40,
        paddingTop: 10,
        fontFamily: 'Quintessential-Regular'
    }
})