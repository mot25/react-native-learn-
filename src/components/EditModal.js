import React, { useContext, useState } from 'react'
import { Alert, Button, Modal, StyleSheet, View } from 'react-native'
import { todoContext } from './Context/todo/todoContext'
import AppCard from './UI/AppCard'
import Input from './UI/Input'

export default function EditModal({ saveHandler, value }) {
    const [title, settitle] = useState(value)
    const { setModal, modal } = useContext(todoContext)

    const saveHandlerEdit = () => {
        if (title.trim().length < 1) {
            Alert.alert(
                'Error!',
                `Error. Min. length word 1 chat. Your lenght ${title.trim().length}`
            )
        } else {
            saveHandler(title)
        }
    }

    return (
        <Modal
            visible={modal}
            animationType="fade"
            transparent={false}
            onRequestClose={() => {
                setModal(false)
                settitle(prev => prev)
            }}
        >
            <View style={styles.wrap}>
                <AppCard>
                    <Input changeInt={settitle} value={title} placeholder={`change ${title}...`} />
                </AppCard>
                <View>
                    <View>
                        <Button title='Cancel' onPress={() => {
                            setModal(false)
                            settitle(value )
                        }} />
                    </View>
                    <View>
                        <Button title='Save' onPress={saveHandlerEdit} />
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

