import React, { useContext, useReducer } from 'react'
import todoReducer from './todoReducer'
import {
    ADD_TODO, UPDATA_TODO, SET_MODAL,
    REMOVE_TODO, FETCH_TODOS, SHOW_LOADER,
    HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR
} from '../types'

import { todoContext } from './todoContext'
import { ScreenContext } from '../screen/ScreenContext'
import { Alert } from 'react-native'


export default function TodoState({ children }) {
    const { setId } = useContext(ScreenContext)
    let initState = {
        todos: [
            { id: 1, title: 'wheth' },
            { id: 2, title: 'whethgege' },
        ],
        modal: false,
        loading: false,
        error: null
    }
    const [value, dispatch] = useReducer(todoReducer, initState)

    const fetchCust = async (title) => {

    }


    value.addTodo = async title => {
        console.log('title', title)
        await dispatch({ type: ADD_TODO, title })
        const response = await fetch("https://todo-app-34d68-default-rtdb.firebaseio.com/todos", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        })
        const data = await response.json();
        console.log('data', data)
    }

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


    const updateTodos = (id, title) => dispatch({ type: UPDATA_TODO, title, id })

    const setModal = bool => dispatch({ type: SET_MODAL, bool })

    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const hideLoader = () => dispatch({ type: HIDE_LOADER })

    const fetch = (arr) => dispatch({ type: FETCH_TODOS, arr })

    const showError = (error) => dispatch({ type: SHOW_ERROR, error })

    const clearError = () => dispatch({ type: CLEAR_ERROR })

    return (
        <todoContext.Provider value={value}>
            {children}
        </todoContext.Provider>
    )
}
