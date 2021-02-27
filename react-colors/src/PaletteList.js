import React from "react"
import MiniPalette from "./Components/MiniPalette"
const PaletteList = ({ palettes }) => {
  return (
    <div>
      <h1>PaletteList</h1>
      {palettes.map((palette) => {
        return <MiniPalette {...palette} />
      })}
    </div>
  )
}

export default PaletteList
