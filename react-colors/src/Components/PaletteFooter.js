import React from "react"
import "../Pallete.css"

const PaletteFooter = ({ palette }) => {
  return (
    <footer className="Pallete-footer">
      {palette.paletteName}
      <span className="Pallete-emoji">{palette.emoji}</span>
    </footer>
  )
}

export default PaletteFooter
