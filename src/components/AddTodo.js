import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

export default function AddTodo({ cb }) {

    const [value, setValue] = useState('')


    const pressBtn = () => {
        console.log('value', value)
        if (value.trim()) {
            cb(value)
            setValue('')
        } else {
            Alert.alert('value zero')
        }
    }


    return <View style={styles.block}>
        <TextInput
            onChangeText={setValue}
            value={value}
            style={styles.input}
            placeholder='Enter todo...'
            autoCorrect={false}// correct word
            autoCapitalize='none' // большие буквы 
            keyboardType='default' // type keyboard
        />
        <Button
            onPress={pressBtn}
            style={styles.btn}
            title="Add" />
    </View>;
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        // marginBottom: 20
    },
    input: {
        padding: 10,
        width: '80%',
        height: '100%',
        borderBottomColor: "#434B4D",
        borderBottomWidth: 3,
        borderStyle: 'solid'
    },
    btn: {

    }
})
