import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';

export default function MainScreen({ todos, addTodo, onOpen, onDel }) {
    return <View>
        <AddTodo cb={addTodo} />
        <View style={styles.container}>
            <Todo todo={todos} onOpen={onOpen}  onDel={onDel} />
        </View>
    </View>;
}

const styles = StyleSheet.create({

})