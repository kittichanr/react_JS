import React, { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/styles"
import styles from '../src/styles/ColorBoxStyles'

const ColorBox = ({
  background,
  name,
  moreUrl,
  showingFullPalette = true,
  classes,
}) => {
  const [copied, setCopied] = useState(false)

  const onCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <CopyToClipboard text={background} onCopy={onCopy}>
      <div style={{ background }} className={classes.colorBox}>
        <div
          style={{ background }}
          className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
        />
        <div
          className={`${classes.copyMessage} ${copied && classes.showMessage}`}
        >
          <h1>Copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  )
}

export default withStyles(styles)(ColorBox)
