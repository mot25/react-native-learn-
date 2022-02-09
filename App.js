import { useState } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
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
    setTodos(prev => prev.filter(item => item.id != id))
  }

  const onOpen = (id) => {
    setTodoId(id)
  }


  let content = <MainScreen
    todos={todos}
    addTodo={addTodo}
    onDel={onDel}
    onOpen={onOpen} />

  if (todoId) {
    const title = todos.find(item => item.id == todoId).title
    content = <TodoScreen title={title} goBack={() => setTodoId(null)} />
  }
  return (
    <View >
      <Navbar text="Todo App" />
      <View>
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
