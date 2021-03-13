import React from "react"
import { withStyles } from "@material-ui/styles"
import styles from "../styles/PaletteFooterStyles"

const PaletteFooter = ({ palette }) => {
  return (
    <footer className="Pallete-footer">
      {palette.paletteName}
      <span className="Pallete-emoji">{palette.emoji}</span>
    </footer>
  )
}

export default withStyles(styles)(PaletteFooter)
