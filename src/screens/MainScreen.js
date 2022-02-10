import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';
import { THEME } from '../theme';

export default function MainScreen({ todos, addTodo, onOpen, onDel }) {
    const [widthDevice, setwidthDevice] = useState(
        Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
    )

    useEffect(() => {
        const updata = () => {
            setwidthDevice(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)
        }
        Dimensions.addEventListener('change', updata)

        return () => {
            Dimensions.removeEventListener('change', updata)
        }
    })


    let content = <View >
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
    },
})