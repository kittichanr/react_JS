import React from "react"
import clsx from "clsx"
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles"
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

const drawerWidth = 400

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      display: 'flex',
      alignItems: "center",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      height: "calc(100vh - 64px)",
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    container: {
      width: '90%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttons: {
      width: '100%',
    },
    button: {
      width: '50%',
    }
  })
)

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
          axis='xy'
          onSortEnd={onSortEnd}
          colors={colors}
          removeColor={removeColor} />
      </main>
    </div>
  )
}

export default NewPaletteForm
