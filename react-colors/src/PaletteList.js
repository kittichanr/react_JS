import React from "react"
import { Link } from "react-router-dom"
import MiniPalette from "./Components/MiniPalette"
const PaletteList = ({ palettes }) => {
  return (
    <div>
      <MiniPalette />
      <h1>PaletteList</h1>
      {palettes.map((palette) => {
        return (
          <p>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </p>
        )
      })}
    </div>
  )
}

export default PaletteList
