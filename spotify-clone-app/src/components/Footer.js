import React from "react"
import "./Footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import RepeatIcon from "@material-ui/icons/Repeat"
import { Grid, Slider } from "@material-ui/core"
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"
import VolumeUpIcon from "@material-ui/icons/VolumeUp"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer_alumLogo"
          src="https://upload.wikimedia.org/wikipedia/en/0/05/EricClaptonTheBlues.jpg"
          alt=""
        />
        <div className="footer_songInfo">
          <h4>Layla</h4>
          <p>Eric Clapton</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" className="MuisSlider-root"/>
          </Grid>
          <Grid item>
            <VolumeUpIcon />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
