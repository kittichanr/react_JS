import React, { useState } from "react"
import ColorBox from "./ColorBox"
import Navbar from "./Navbar"
import PaletteFooter from "./Components/PaletteFooter"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/styles"
import styles from '../src/styles/PaletteStyles'

const SingleColorPalette = ({ palette, colorId, classes }) => {
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
      showingFullPalette={false}
    />
  ))

  return (
    <div className={classes.Pallete}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showingAllColors={false}
      />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${palette.id}`}>Go Back</Link>
        </div>
      </div>
      <PaletteFooter palette={palette} />
    </div>
  )
}

export default withStyles(styles)(SingleColorPalette)
