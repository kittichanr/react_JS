import React, { useState } from "react"
import ColorBox from "./ColorBox"
import "./Pallete.css"
import "./ColorBox.css"
import Navbar from "./Navbar"
import PaletteFooter from "./Components/PaletteFooter"
import { Link } from "react-router-dom"

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
      key={color.name}
      name={color.name}
      id={color.id}
      background={color[format]}
      showLink={false}
    />
  ))

  return (
    <div className="SingleColorPalette Pallete">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showingAllColors={false}
      />
      <div className="Pallete-colors">
        {colorBoxes}
        <div className="go-back ColorBox">
          <Link to={`/palette/${palette.id}`} className="back-button">
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter palette={palette} />
    </div>
  )
}

export default SingleColorPalette
