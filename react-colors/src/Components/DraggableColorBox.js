import React from "react"
import DeleteIcon from "@material-ui/icons/Delete"
import { SortableElement } from 'react-sortable-hoc'
import useStyles from '../styles/DraggableColorBoxStyles'

const DraggableColorBox = SortableElement(({ color, name,handleClick }) => {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
      </div>
    </div>
  )
})

export default DraggableColorBox
