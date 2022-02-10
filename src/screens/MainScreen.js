import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import AddTodo from '../components/AddTodo';
import { todoContext } from '../components/Context/todo/todoContext';
import Todo from '../components/Todo';
import { THEME } from '../theme';

export default function MainScreen() {
    const { todos } = useContext(todoContext)
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



    console.log('31todos.lenght', todos.length)
    console.log('32todos', todos)
    return <View>
        <AddTodo />
        {todos.length < 1 ?
            <View style={styles.wrapImage}>
                <Image
                    style={styles.image}
                    source={require('../../assets/no-items.png.png')}
                />
            </View>
            :
            <View >
                <Todo />
            </View>
        }
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