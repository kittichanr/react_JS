import React from "react"
import clsx from "clsx"
import { useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import Button from "@material-ui/core/Button"
import DraggableColorList from "./Components/DraggableColorList"
import { arrayMove } from 'react-sortable-hoc'
import PaletteFormNav from './Components/PaletteFormNav'
import ColorPickerForm from './Components/ColorPickerForm'
import useStyles from './styles/NewPaletteFormStyles'

const NewPaletteForm = ({ savePalette, history, palettes, maxColor = 20 }) => {
  const classes = useStyles()
  const theme = useTheme()

  const [open, setOpen] = React.useState(false)
  const [colors, setColors] = React.useState(palettes[0].colors)

  const isPaletteFull = colors.length >= maxColor

  const addNewColor = React.useCallback((newColor) => {
    setColors([...colors, newColor])
  }, [colors])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-')
    newPalette.colors = colors

    savePalette(newPalette)
    history.push('/')
  }

  const removeColor = (colorName) => {
    setColors(colors.filter(color => color.name !== colorName))
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex))
  }

  const clearColors = () => setColors([])

  const addRandomColor = () => {
    const allColors = palettes.map(palette => {
      return palette.colors
    }).flat()
    const rand = Math.floor(Math.random() * allColors.length)
    const randomColor = allColors[rand]
    setColors([...colors, randomColor])
  }

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        palettes={palettes}
        handleSubmit={handleSubmit}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>Design your Palette</Typography>
          <div className={classes.buttons}>
            <Button className={classes.button} variant="contained" color="secondary" onClick={clearColors}>
              Clear Palette
          </Button>
            <Button className={classes.button} variant="contained" color="primary" onClick={addRandomColor} disabled={isPaletteFull}>
              Random Palette
          </Button>
          </div>
          <ColorPickerForm
            isPaletteFull={isPaletteFull}
            addNewColor={addNewColor}
            colors={colors}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          distance={20}
          axis='xy'
          onSortEnd={onSortEnd}
          colors={colors}
          removeColor={removeColor} />
      </main>
    </div>
  )
}

export default NewPaletteForm
