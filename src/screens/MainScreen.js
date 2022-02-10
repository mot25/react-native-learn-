import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';

export default function MainScreen({ todos, addTodo, onOpen, onDel }) {

    let content = <View style={styles.container}>
        <Todo todo={todos} onOpen={onOpen} onDel={onDel} />
    </View>


    if (todos.length < 1) {
        content = <View style={styles.wrapImage}>
            <Image
                style={styles.image}
                source={require('../../assets/no-items.png.png')}
            />
        </View>
    }
    return <View>
        <AddTodo cb={addTodo} />
        {content}
    </View>;
}

const styles = StyleSheet.create({
    wrapImage: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})