import {
    makeStyles,
    Theme,
    createStyles,
} from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        picker: {
            width: '100% !important',
            marginTop: '2rem',
        },
        addColor: {
            width: '100%',
            padding: '1rem',
            marginTop: 10,
            fontSize: '2rem'
        },
        colorInput: {
            width: '100%',
            height: '70px'
        }
    })
)

export default useStyles
