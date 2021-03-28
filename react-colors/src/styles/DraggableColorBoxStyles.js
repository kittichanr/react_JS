import { createStyles, makeStyles } from "@material-ui/core/styles"
import size from './size'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: "20%",
            height: "25%",
            margin: "0 auto",
            position: "relative",
            display: "inline-block",
            cursor: "pointer",
            marginBottom: "-5px",
            '&:hover svg': {
                color: 'white',
                transform: 'scale(1.5)'
            },
            [size.down('lg')]:{
                width: '25%',
                height: "20%",
            },
            [size.down('md')]:{
                width: '50%',
                height: "10%",
            },
            [size.down('xs')]:{
                width: '100%',
                height: "5%",
            },
        },
        boxContent: {
            position: "absolute",
            width: "100%",
            left: "0",
            bottom: "0",
            padding: "10px",
            color: "rgba(0,0,0,0.5)",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontSize: "12px",
            display: 'flex',
            justifyContent: 'space-between',
        },
        deleteIcon: {
            transition: 'all 0.3s ease-in-out'
        }
    })
)

export default useStyles