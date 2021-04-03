import React from "react"
import MiniPalette from "./Components/MiniPalette"
import { withStyles } from "@material-ui/styles"
import styles from "./styles/PaletteListStyles"
import { Link } from "react-router-dom"
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'

const PaletteList = ({ classes, palettes, history, deletePalette }) => {
  const handleClick = (id) => history.push(`/palette/${id}`)

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => {
            return (
              <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                <MiniPalette
                  {...palette}
                  handleDelete={deletePalette}
                  onClick={() => handleClick(palette.id)}
                  key={palette.id}
                  id={palette.id}
                />
              </CSSTransition>
            )
          })}
        </TransitionGroup>
      </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList)
