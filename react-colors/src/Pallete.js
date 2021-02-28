import React, { useState } from "react"
import ColorBox from "./ColorBox"
import "./Pallete.css"
import Navbar from "./Navbar"
import PaletteFooter from "./Components/PaletteFooter"

const Pallete = ({ palette }) => {
  const [level, setLevel] = useState(500)
  const [format, setFormat] = useState("hex")

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      moreUrl={`/palette/${palette.id}/${color.id}`}
    />
  ))

  const changeLevel = (level) => setLevel(level)

  const changeFormat = (value) => {
    setFormat(value)
  }

  return (
    <div className="Pallete">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
      />
      <div className="Pallete-colors">{colorBoxes}</div>
      <PaletteFooter palette={palette} />
    </div>
  )
}

export default Pallete
