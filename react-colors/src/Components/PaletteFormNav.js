import React, { useState } from 'react'
import clsx from "clsx"
import { Link } from 'react-router-dom'
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import PaletteMetaForm from './PaletteMetaForm'
import useStyles from '../styles/PaletteFromNavStyles'
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos"

const PaletteFormNav = ({ open, palettes, handleSubmit, handleDrawerOpen }) => {
    const classes = useStyles()

    const [fromShowing, setFromShowing] = useState(false)

    const showForm = () => setFromShowing(true)
    const hideForm = () => setFromShowing(false)

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
                        className={clsx(classes.menuButton, { [classes.hide]: open })}
                    >
                        <AddToPhotosIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>Persistent drawer</Typography>
                </Toolbar>
                <div className={classes.navBtns}>
                    <Link to="/"><Button className={classes.button} variant='contained' color="secondary">Go Back</Button></Link>
                    <Button className={classes.button} variant="contained" color="primary" onClick={showForm}>Save</Button>
                </div>
            </AppBar>
            { fromShowing && <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={hideForm} />}
        </div >
    )
}

export default PaletteFormNav
