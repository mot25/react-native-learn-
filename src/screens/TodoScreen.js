import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import EditModal from '../components/EditModal';
import AppCard from '../components/UI/AppCard';
import { THEME } from '../theme';

export default function TodoScreen({ goBack, onDel, onSave, todo }) {

  const [modal, setModal] = useState(false)

  const saveHandler = (title) => {
    onSave(todo.id, title)
    setModal(false)
  }
  return <View>
    <EditModal
      value={todo.title}
      visible={modal}
      id={todo.id}
      onSave={saveHandler}
      visModalNone={() => setModal(false)}
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
          onPress={goBack} />
      </View>
      <View style={styles.wrapperBtn}>
        <Button
          title='Delete task'
          color={THEME.DANGERE_COLOR}
          onPress={() => onDel(todo.id)} />
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