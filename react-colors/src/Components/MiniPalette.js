import React, { memo, useCallback } from "react"
import { withStyles } from "@material-ui/styles"
import styles from "../styles/MiniPaletteStyles"
import DeleteIcon from '@material-ui/icons/Delete'

function MiniPalette({ classes, paletteName, emoji, colors, goToPallete, openDialog, id }) {
  const miniColorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    />
  ))

  const deletePalette = useCallback((e) => {
    e.stopPropagation()
    openDialog(id)
  }, [id, openDialog])

  const handleClick = useCallback(() => goToPallete(id), [goToPallete, id])

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon
        className={classes.deleteIcon}
        style={{ transition: 'all 0.3s ease-in-out' }}
        onClick={deletePalette}
      />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(memo(MiniPalette))
