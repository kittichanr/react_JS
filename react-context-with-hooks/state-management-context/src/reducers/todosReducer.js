import { v4 as uuid } from 'uuid'

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: uuid(), task: action.task, completed: false }]
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.todoId)
        case 'TOGGLE':
            return state.map(todo => todo.id === action.todoId ? { ...todo, completed: !todo.completed } : todo)
        case 'EDIT':
            return state.map(todo => todo.id === action.todoId ? { ...todo, task: action.newTask } : todo)
        default:
            return state
    }
}

export default reducer

