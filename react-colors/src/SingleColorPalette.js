import React from "react"
import ColorBox from "./ColorBox"
import "./Pallete.css"

const SingleColorPalette = ({ palette, colorId }) => {
  const gatherShades = () => {
    let shades = []
    let allColors = palette.colors

    for (const key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorId)
      )
    }

    return shades.slice(1)
  }

  const colorBoxes = gatherShades().map((color) => (
    <ColorBox
      key={color.id}
      name={color.name}
      id={color.id}
      background={color.hex}
      showLink={false}
    />
  ))

  return (
    <div className="Pallete">
      <div className="Pallete-colors">{colorBoxes}</div>
    </div>
  )
}

export default SingleColorPalette
