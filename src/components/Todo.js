import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View } from 'react-native';

export default function Todo({ todo, onDel, onOpen }) {
    return <View style={style.mainWrapper}>
        <FlatList data={todo} renderItem={({ item }) => (
            <TouchableOpacity
                activeOpacity={0.2}
                onPress={() => onOpen(item.id)}
                onLongPress={() => onDel(item.id)}
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
        paddingBottom: 100
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

