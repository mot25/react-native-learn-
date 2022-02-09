import React, { useState } from 'react'
import { Alert, Button, Modal, StyleSheet, View } from 'react-native'
import AppCard from './UI/AppCard'
import Input from './UI/Input'

export default function EditModal({ visible, onSave, id, visModalNone, value }) {
    const [title, settitle] = useState(value)

    const saveHandler = () => {
        if (title.trim().length < 1) {
            Alert.alert(
                'Error!',
                `Error. Min. length word 1 chat. Your lenght ${title.trim().length}`
            )
        } else {
            console.log('title', title)
            console.log('id', id)
            onSave(title)
        }
    }

    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={false}
            onRequestClose={visModalNone}
        >
            <View style={styles.wrap}>
                <AppCard>
                    <Input changeInt={settitle} value={title} placeholder={`change ${title}...`} />
                </AppCard>
                <View>
                    <View>
                        <Button title='Cancel' onPress={visModalNone} />
                    </View>
                    <View>
                        <Button title='Save' onPress={saveHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

{/* <Modal
animationType="slide"
transparent={true}
visible={modalVisible}
onRequestClose={() => {
  Alert.alert("Modal has been closed.");
  setModalVisible(!modalVisible);
}}
> */}