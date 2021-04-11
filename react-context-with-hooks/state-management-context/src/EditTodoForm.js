import React, { useContext } from 'react'
import { TextField } from '@material-ui/core'
import useInputState from './hooks/useInputState'
import { DispatchContext } from './contexts/todosContext'

const EditTodoForm = ({ id, task, toggleEditForm }) => {
    const dispatch = useContext(DispatchContext)
    const [value, handleChange, reset] = useInputState(task)

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            dispatch({ type: 'EDIT', todoId: id, newTask: value })
            reset()
            toggleEditForm()
        }}
            style={{ marginLeft: '1rem', width: '50%' }}
        >
            <TextField
                value={value}
                onChange={handleChange}
                margin='normal'
                fullWidth
                autoFocus
            />
        </form>
    )
}

export default EditTodoForm
