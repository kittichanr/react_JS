import { v4 as uuid } from 'uuid'
import useLocalStorageState from "./useLocalStorageState"

// eslint-disable-next-line import/no-anonymous-default-export
export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState('todos',initialTodos)

    return {
        todos,
        addTodo: newTodo => setTodos([...todos, { id: uuid(), task: newTodo, completed: false }]),
        removeTodo: todoId => {
            const updatedTodos = () => todos.filter(todo => todo.id !== todoId)
            setTodos(updatedTodos)
        },
        toggleTodo: todoId => {
            const updatedTodos = () => todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
            setTodos(updatedTodos)
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = () => todos.map(todo => todo.id === todoId ? { ...todo, task: newTask } : todo)
            setTodos(updatedTodos)
        }
    }
}
