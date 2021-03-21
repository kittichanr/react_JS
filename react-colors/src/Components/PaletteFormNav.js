import React, { useState, useEffect } from 'react'
import {
    makeStyles,
    Theme,
    createStyles,
} from "@material-ui/core/styles"
import clsx from "clsx"
import { Link } from 'react-router-dom'
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Button from "@material-ui/core/Button"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"

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
            flexDirection: 'row',
            justifyContent: 'space-between'
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
        navBtns:{

        }
    })
)

const PaletteFormNav = ({ open, palettes, handleSubmit, handleDrawerOpen }) => {
    const classes = useStyles()

    const [inputValues, setInputValues] = useState({
        newPaletteName: ''
    })

    useEffect(() => {
        ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
            return palettes.every(
                ({ paletteName }) => paletteName?.toLowerCase() !== value?.toLowerCase()
            )
        })
    }, [palettes])

    const handleChange = (event) => {
        setInputValues({ [event.target.name]: event.target.value })
    }


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color='default'
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>Persistent drawer</Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <ValidatorForm onSubmit={() => handleSubmit(inputValues.newPaletteName)}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <TextValidator
                                    label='Palette Name'
                                    name='newPaletteName'
                                    value={inputValues.newPaletteName || ''}
                                    onChange={handleChange}
                                    validators={["required", 'isPaletteNameUnique']}
                                    errorMessages={[
                                        "Enter Palette Name",
                                        "Palette name must be unique"
                                    ]}
                                />
                                <Button variant='contained' color='primary' type='submit '>Save Pallete</Button>
                            </div>
                        </ValidatorForm>
                        <Link to="/"><Button variant='contained' color="secondary">Go Back</Button></Link>
                    </div>
            </AppBar>
        </div>
    )
}

export default PaletteFormNav
