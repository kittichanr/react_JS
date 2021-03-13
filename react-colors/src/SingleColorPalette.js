import React, { useState } from "react"
import ColorBox from "./ColorBox"
import "./Pallete.css"
import "./ColorBox.css"
import Navbar from "./Navbar"
import PaletteFooter from "./Components/PaletteFooter"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/styles"

const styles = {
  Pallete: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
    marginBottom: "-0.35px",
    opacity: "1",
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none",
    },
  },
}

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
