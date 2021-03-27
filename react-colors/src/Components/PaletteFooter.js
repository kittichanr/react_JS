import React from "react"
import { withStyles } from "@material-ui/styles"
import styles from "../styles/PaletteFooterStyles"

const PaletteFooter = ({ palette,classes }) => {
  return (
    <footer className={classes.PalleteFooter}>
      {palette.paletteName}
      <span className={classes.PalleteEmoji}>{palette.emoji}</span>
    </footer>
  )
}

export default withStyles(styles)(PaletteFooter)
