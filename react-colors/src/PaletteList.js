import React from "react"
import MiniPalette from "./Components/MiniPalette"
import { withStyles } from "@material-ui/styles"
import styles from "./styles/PaletteListStyles"
import { Link } from "react-router-dom"

const PaletteList = ({ classes, palettes, history, deletePalette }) => {
  const handleClick = (id) => history.push(`/palette/${id}`)

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => {
            return (
              <MiniPalette
                {...palette}
                handleDelete={deletePalette}
                onClick={() => handleClick(palette.id)}
                key={palette.id}
                id={palette.id}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList)
