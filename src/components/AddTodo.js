import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';
import Input from './UI/Input';

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
        <Input placeholder='Enter todo...' changeInt={setValue}  value={value}/>
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
    btn: {

    }
})
