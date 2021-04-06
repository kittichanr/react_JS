import React from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Todo from './Todo'

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
    if (todos.length < 1) {
        return null
    }
    return (
        <Paper>
            <List>
                {todos.map((todo, index) => {
                    return (
                        <div key={todo.id}>
                            <Todo
                                {...todo}
                                key={todo.id}
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />
                            {index < todos.length - 1 && <Divider />}
                        </div>
                    )
                })}
            </List>
        </Paper>
    )
}

export default TodoList
