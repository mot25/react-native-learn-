import React, { useState } from 'react';
import { Alert, Button, Keyboard, StyleSheet, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import Input from './UI/Input';

export default function AddTodo({ cb }) {

    const [value, setValue] = useState('')


    const pressBtn = () => {
        console.log('value', value)
        if (value.trim()) {
            cb(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            Alert.alert('value zero')
        }
    }


    return <View style={styles.block}>
        <Input placeholder='Enter todo...' changeInt={setValue} value={value} />
        <AntDesign.Button
            name='pluscircleo'
            onPress={pressBtn}
            style={styles.btn}>
        </AntDesign.Button>
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
    btn: {

    }
})
