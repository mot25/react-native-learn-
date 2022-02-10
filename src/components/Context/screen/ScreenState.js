import React, { useReducer } from 'react'
import { ScreenContext } from './ScreenContext'
import ScreenReducer from './ScreenReducer'
import { CHANGE_SCREEN } from '../types'
export default function ScreenState({ children }) {
    let initState = {
        todoId: null
    }

    const [value, dispatch] = useReducer(ScreenReducer, initState)
    value.setId = (id) => {
        dispatch({ type: CHANGE_SCREEN, id })
    }
    return (
        <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
    )
}
