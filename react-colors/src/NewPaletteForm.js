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
import { ChromePicker } from "react-color"
import Button from "@material-ui/core/Button"
import DraggableColorList from "./Components/DraggableColorList"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import { arrayMove } from 'react-sortable-hoc'
import PaletteFormNav from './Components/PaletteFormNav'
const drawerWidth = 400

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
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
  })
)

const NewPaletteForm = ({ savePalette, history, palettes, maxColor = 20 }) => {
  const classes = useStyles()
  const theme = useTheme()

  const [open, setOpen] = React.useState(false)
  const [colors, setColors] = React.useState(palettes[0].colors)
  const [currentColor, setCurrentColor] = React.useState("teal")
  const [inputValues, setInputValues] = React.useState({
    newColorName: '',
    newPaletteName: ''
  })

  const isPaletteFull = colors.length >= maxColor

  React.useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return colors.every(
        ({ name }) => name?.toLowerCase() !== value?.toLowerCase()
      )
    })
    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      return colors.every(
        ({ color }) => color !== currentColor
      )
    })
  }, [colors, currentColor])

  const addNewColor = () => {
    const newColor = {
      color: currentColor,
      name: inputValues.newColorName,
    }
    setColors([...colors, newColor])
  }

  const handleChange = (event) => {
    setInputValues({ [event.target.name]: event.target.value })
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleSubmit = (newPaletteName) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      colors
    }
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
     classes={classes} 
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
        <Typography variant="h4">Design your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary" onClick={clearColors}>
            Clear Palette
          </Button>
          <Button variant="contained" color="primary" onClick={addRandomColor} disabled={isPaletteFull}>
            Random Palette
          </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={(newColor) => setCurrentColor(newColor.hex)}
        />
        <ValidatorForm onSubmit={addNewColor} va>
          <TextValidator
            value={inputValues.newColorName || ''}
            name='newColorName'
            onChange={handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter Color Name",
              "Color name must be unique",
              "Color already used!",
            ]}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ backgroundColor: isPaletteFull ? 'grey' : currentColor }}
            disabled={isPaletteFull}
          >
            {isPaletteFull ? 'Palette Full' : 'Add Palette'}
          </Button>
        </ValidatorForm>
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
