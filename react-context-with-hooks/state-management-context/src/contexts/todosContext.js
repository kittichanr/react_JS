import React, { createContext } from 'react'
import todosReducer from '../reducers/todosReducer'
import useLocalStorageReducer from '../hooks/useLocalStorageReducer'

const defaultTodos = [
    { id: 1, task: "Mow the lawn using goats", completed: false },
    { id: 2, task: "Release lady bugs into garden", completed: true }
];

export const TodosContext = createContext()
export const DispatchContext = createContext()

const TodosProvider = ({ children }) => {
    const [todos, dispatch] = useLocalStorageReducer('todos', defaultTodos, todosReducer)

    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}

export default TodosProvider