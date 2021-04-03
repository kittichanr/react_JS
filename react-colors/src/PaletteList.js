import React, { useState } from "react"
import MiniPalette from "./Components/MiniPalette"
import { withStyles } from "@material-ui/styles"
import styles from "./styles/PaletteListStyles"
import { Link } from "react-router-dom"
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core"
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"
import { blue, red } from "@material-ui/core/colors"


const PaletteList = ({ classes, palettes, history, deletePalette }) => {
  const handleClick = (id) => history.push(`/palette/${id}`)

  const [open, setOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(false)

  const openDialog = (id) => {
    setDeleteId(id)
    setOpen(true)
  }
  const closeDialog = () => {
    setDeleteId('')
    setOpen(false)
  }

  const handleDelete = () => {
    deletePalette(deleteId)
    closeDialog()
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => {
            return (
              <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                <MiniPalette
                  {...palette}
                  openDialog={openDialog}
                  onClick={() => handleClick(palette.id)}
                  key={palette.id}
                  id={palette.id}
                />
              </CSSTransition>
            )
          })}
        </TransitionGroup>
      </div>
      <Dialog open={open} aria-labelledby="delete-dialog-title" onClose={closeDialog}>
        <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  )
}

export default withStyles(styles)(PaletteList)
