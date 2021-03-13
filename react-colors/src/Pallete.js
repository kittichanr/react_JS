import React, { useState } from "react"
import ColorBox from "./ColorBox"
import "./Pallete.css"
import Navbar from "./Navbar"
import PaletteFooter from "./Components/PaletteFooter"
import { withStyles } from "@material-ui/styles"

const styles = {
  Pallete:{
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  colors:{
    height: "90%"
  }
}

const Pallete = ({ palette,classes }) => {
  const [level, setLevel] = useState(500)
  const [format, setFormat] = useState("hex")

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      moreUrl={`/palette/${palette.id}/${color.id}`}
      showingFullPalette={true}
    />
  ))

  const changeLevel = (level) => setLevel(level)

  const changeFormat = (value) => {
    setFormat(value)
  }

  return (
    <div className={classes.Pallete}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
      />
      <div className={classes.colors}>{colorBoxes}</div>
      <PaletteFooter palette={palette} />
    </div>
  )
}

export default withStyles(styles)(Pallete)
