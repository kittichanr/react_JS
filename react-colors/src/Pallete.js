import React, { useState } from "react"
import ColorBox from "./ColorBox"
import "./Pallete.css"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

const Pallete = ({ palette }) => {
  const [level, setLevel] = useState(500)
  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ))
  const changeLevel = (level) => setLevel(level)
  return (
    <div className="Pallete">
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={changeLevel}
        />
      </div>
      <div className="Pallete-colors">{colorBoxes}</div>
    </div>
  )
}

export default Pallete
