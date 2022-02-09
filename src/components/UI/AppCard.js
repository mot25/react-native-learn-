import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function AppCard(props) {
  return (
    <View style={ {...styles.defaults, ...props.style} }>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  defaults: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2, 
    borderColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowRadius: 2, 
    shadowOpacity: 0.3,
    shadowOffset: {width: 2, height: 2},
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 8
  }
})