import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function TodoScreen({ goBack, title }) {
  return <View>
    <Text>{title}</Text>
    <View style={styles.btnBlock}>
      <View style={styles.wrapperBtn}>
        <Button title='Back Todos' color='#757575' onPress={goBack} />
      </View>
      <View style={styles.wrapperBtn}>
        <Button title='Delete task' color='#e53935' onPress={() => console.log('to remove')} />
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
  }
})