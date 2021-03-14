import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => 
  createStyles({
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        marginBottom: "-0.35px",
    },
  })
)

const DraggableColorBox = ({ color }) => {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      {color}
    </div>
  )
}

export default DraggableColorBox
