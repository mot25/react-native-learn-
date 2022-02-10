import React from 'react'
import { ADD_TODO, UPDATA_TODO, REMOVE_TODO, SET_MODAL } from '../types';

export default function reducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todos: [
                    ...state.todos,
                    { id: Date.now().toString(), title: action.title }
                ]
            };

        case UPDATA_TODO:
            return {
                ...state, todos: state.todos.map(item => {
                    if (item.id == action.id) {
                        item.title = action.title;
                    }
                    return item;
                })
            };

        case REMOVE_TODO:
            return { ...state, todos: state.todos.filter(item => item.id != action.id) };

        case SET_MODAL:
            return { ...state, modal: action.bool };

        default:
            return state;
    }
}
