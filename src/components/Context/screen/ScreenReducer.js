import React from 'react'
import { CHANGE_SCREEN } from '../types'

export default function ScreenReducer(state, action) {
    switch (action.type) {
        case CHANGE_SCREEN:
            return { ...state, todoId: action.id }
        default:
            return state

    }
}
