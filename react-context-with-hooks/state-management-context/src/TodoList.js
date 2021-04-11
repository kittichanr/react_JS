import React, { useContext } from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Todo from './Todo'
import { TodosContext } from './contexts/todosContext'

const TodoList = () => {
    const todos = useContext(TodosContext)

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
