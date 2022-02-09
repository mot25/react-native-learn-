import { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, Alert } from 'react-native';
import * as Font from 'expo-font'
import MainScreen from './src/screens/MainScreen';
import Navbar from './src/components/Navbar'
import TodoScreen from './src/screens/TodoScreen';

const loadApp = async () => {
  await Font.loadAsync({
    'Quintessential-Regular': require('./assets/fonts/Quintessential-Regular.ttf')
  })
}


export default function App() {

  const [todoId, setTodoId] = useState(1)
  const [todos, setTodos] = useState([
    { id: 1, title: 'vdsfv1' },
    { id: 2, title: 'vdsfv2' },
    { id: 4, title: 'vdsfv3' },
    { id: 5, title: '25' },
  ])

  const addTodo = (title) => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: Date.now().toString(),
          title
        }
      ]
    })
  }

  const onDel = (id) => {
    let title = todos.find(d => d.id === id).title
    Alert.alert(
      "Delete task",
      `are you sure you want to delete ${title} ?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter(item => item.id != id))
          }
        },
      ]
    );

  }

  const onOpen = (id) => {
    setTodoId(id)
  }

  const updateTodos = (id, title) => {
    setTodos(old => {
      return old.map(item => {
        if (item.id == id) {
          item.title = title;
        }
        return item;
      })
    })
  }

  let content = <MainScreen
    todos={todos}
    addTodo={addTodo}
    onDel={onDel}
    onOpen={onOpen} />

  if (todoId) {
    const todo = todos.find(item => item.id == todoId)
    console.log('todos', todos)
    console.log('todo', todo)

    content = <TodoScreen onSave={updateTodos} onDel={onDel} todo={todo} goBack={() => setTodoId(null)} />
  }
  return (
    <View >
      <Navbar text="Todo App" />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 50
  },
});
