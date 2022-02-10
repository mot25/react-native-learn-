import React, { useContext } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View } from 'react-native';
import { ScreenContext } from './Context/screen/ScreenContext';
import { todoContext } from './Context/todo/todoContext';

export default function Todo() {

    const { setId } = useContext(ScreenContext)
    console.log('setId', setId)
    const { todos, onDelContext } = useContext(todoContext)

    return <View style={style.mainWrapper}>
        <FlatList data={todos} renderItem={({ item }) => (
            <TouchableOpacity
                activeOpacity={0.2}
                onPress={() => setId(item.id)}
                onLongPress={() => onDelContext(item.id)}
            >
                <View style={style.wrapper}>
                    <Text style={style.text} >{item.title}</Text>
                </View>
            </TouchableOpacity>
        )} />
    </View>

}

const style = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        paddingBottom: 100,
        textAlign: 'center'
    },
    wrapper: {
        borderStyle: 'solid',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        borderColor: '#7A7666',
        borderWidth: 3,
        marginBottom: 5,
    },
    text: {
        padding: 15,
        textAlign: 'center',
    }
})

