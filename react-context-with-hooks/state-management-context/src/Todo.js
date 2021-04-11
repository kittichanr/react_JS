import React, { useContext, memo } from 'react'
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import useToggle from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm'
import { DispatchContext } from './contexts/todosContext'

const Todo = ({ id, task, completed }) => {
    const dispatch = useContext(DispatchContext)
    const [isEditing, toggle] = useToggle(false)
    return (
        <ListItem style={{ height: '64px' }}>
            {isEditing ? <EditTodoForm id={id} task={task} toggleEditForm={toggle} /> :
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: 'TOGGLE', todoId: id })} />
                    <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label='Delete' onClick={() => dispatch({ type: 'REMOVE', todoId: id })} >
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label='Edit' onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}

export default memo(Todo)
