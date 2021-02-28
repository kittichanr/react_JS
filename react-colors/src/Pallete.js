import React, { useState } from "react"
import ColorBox from "./ColorBox"
import "./Pallete.css"
import Navbar from "./Navbar"

const Pallete = ({ palette }) => {
  const [level, setLevel] = useState(500)
  const [format, setFormat] = useState("hex")

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      id={color.id}
      paletteId={palette.id}
      moreUrl={`palette/${palette.id}/${color.id}`}
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
      <footer className="Pallete-footer">
        {palette.paletteName}
        <span className="Pallete-emoji">{palette.emoji}</span>
      </footer>
    </div>
  )
}

export default Pallete
