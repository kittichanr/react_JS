import React, { useState } from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import "./Navbar.css"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"

const Navbar = ({ level, changeLevel, handleChange }) => {
  const [colorFormat, setColorFormat] = useState("hex")

  const onChange = (e) => {
    setColorFormat(e.target.value)
    handleChange(e.target.value)
  }

  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">reactcolorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={colorFormat} onChange={onChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
    </header>
  )
}

export default Navbar
