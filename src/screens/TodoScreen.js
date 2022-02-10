import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScreenContext } from '../components/Context/screen/ScreenContext';
import { todoContext } from '../components/Context/todo/todoContext';
import EditModal from '../components/EditModal';
import AppCard from '../components/UI/AppCard';
import { THEME } from '../theme';

export default function TodoScreen() {

  const { setModal, onDelContext, updateTodos, todos } = useContext(todoContext)
  const { setId, todoId } = useContext(ScreenContext)
  let todo = todos.find(item => item.id === todoId)
  const saveHandler = (title) => {
    updateTodos(todo.id, title)
    setModal(false)
  }
  return <View>
    <EditModal
      value={todo.title}
      id={todo.id}
      saveHandler={saveHandler}
    />

    <AppCard style={styles.card}>
      <Text style={styles.title}>{todo.title}</Text>
      <Button title="Edit" onPress={() => setModal(true)} />
    </AppCard>

    <View style={styles.btnBlock}>
      <View style={styles.wrapperBtn}>
        <Button
          title='Back Todos'
          color={THEME.GRAY_COLOR}
          onPress={() => setId(null)} />
      </View>
      <View style={styles.wrapperBtn}>
        <Button
          title='Delete task'
          color={THEME.DANGERE_COLOR}
          onPress={() => onDelContext(todo.id)} />
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  btnBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  wrapperBtn: {
    width: '30%',
  },
  title: {
    fontSize: 26
  },
  card: {
    padding: 15,
    marginBottom: 20,
  }
})