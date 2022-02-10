import React, { useContext, useReducer } from 'react'
import todoReducer from './todoReducer'
import { ADD_TODO, UPDATA_TODO, SET_MODAL, REMOVE_TODO } from '../types'

import { todoContext } from './todoContext'
import { ScreenContext } from '../screen/ScreenContext'
import { Alert } from 'react-native'


export default function TodoState({ children }) {
    const { setId } = useContext(ScreenContext)
    let initState = {
        todos: [
            { id: 1, title: 'vdsfv1' },
            { id: 2, title: 'vdsfv2' },
            { id: 4, title: 'vdsfv3' },
            { id: 5, title: '25' },
        ],
        modal: false,
    }
    const [value, dispatch] = useReducer(todoReducer, initState)
    value.addTodo = title => dispatch({ type: ADD_TODO, title })

    value.onDelContext = id => {
        let title = value.todos.find(d => d.id === id).title
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
                        setId(null)
                        dispatch({ type: REMOVE_TODO, id })
                    }
                },
            ]
        );



    }
    value.updateTodos = (id, title) => dispatch({ type: UPDATA_TODO, title, id })

    value.setModal = bool => dispatch({ type: SET_MODAL, bool })


    return (
        <todoContext.Provider value={value}>
            {children}
        </todoContext.Provider>
    )
}
