import React, { useState } from "react"
import ColorBox from "./ColorBox"
import "./Pallete.css"
import Navbar from "./Navbar"
import PaletteFooter from "./Components/PaletteFooter"

const SingleColorPalette = ({ palette, colorId }) => {
  const [level, setLevel] = useState(500)
  const [format, setFormat] = useState("hex")

  const changeLevel = (level) => setLevel(level)

  const changeFormat = (value) => {
    setFormat(value)
  }
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
      background={color[format]}
      showLink={false}
    />
  ))

  return (
    <div className="Pallete">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showingAllColors={false}
      />
      <div className="Pallete-colors">{colorBoxes}</div>
      <PaletteFooter palette={palette} />
    </div>
  )
}

export default SingleColorPalette
