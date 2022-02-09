import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function Input(props) {
    return (
        <TextInput
            {...props}
            onChangeText={props.changeInt}
            value={props.value}
            style={{ ...styles.default, ...props.style }}
            placeholder={props.placeholder ? props.placeholder : 'placeholder'}
            autoCorrect={true}// correct word
            autoCapitalize='none' // большие буквы 
            keyboardType='default' // type keyboard
        />
    )
}

const styles = StyleSheet.create({
    default: {
        padding: 10,
        width: '80%',
        height: '100%',
        borderBottomColor: "#434B4D",
        borderBottomWidth: 3,
        borderStyle: 'solid'
    }
})
