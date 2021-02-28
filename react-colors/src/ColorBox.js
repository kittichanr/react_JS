import React, { useState } from "react"
import "./ColorBox.css"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Link, withRouter } from "react-router-dom"

const ColorBox = ({ background, name, id, paletteId, moreUrl }) => {
  const [copied, setCopied] = useState(false)
  const onCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }
  return (
    <CopyToClipboard text={background} onCopy={onCopy}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
          <span className="see-more">More</span>
        </Link>
      </div>
    </CopyToClipboard>
  )
}

export default withRouter(ColorBox)
