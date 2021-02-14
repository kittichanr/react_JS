import React, { useState } from "react"
import ColorBox from "./ColorBox"
import "./Pallete.css"
import Navbar from "./Navbar"

const Pallete = ({ palette }) => {
  const [level, setLevel] = useState(500)
  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ))
  const changeLevel = (level) => setLevel(level)
  return (
    <div className="Pallete">
      <Navbar level={level} changeLevel={changeLevel}/>
      <div className="Pallete-colors">{colorBoxes}</div>
    </div>
  )
}

export default Pallete
