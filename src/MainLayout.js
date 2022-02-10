import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';
import Navbar from './components/Navbar';
import { THEME } from './theme';
import MainScreen from './screens/MainScreen'
import TodoScreen from './screens/TodoScreen'
import { ScreenContext } from './components/Context/screen/ScreenContext';

export default function MainLayout() {
    const { todoId } = useContext(ScreenContext)



    return (
        <View>
            <Navbar text="Todo App" />
            <View style={styles.container}>
                {todoId ? <TodoScreen /> : <MainScreen />}
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: THEME.PADDING_HORIZONTAL,
        paddingBottom: 50
    },
});
