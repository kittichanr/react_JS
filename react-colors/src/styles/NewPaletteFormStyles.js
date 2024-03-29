import { createStyles, makeStyles } from "@material-ui/core/styles"
import { DRAWER_WIDTH } from '../constants'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        hide: {
            display: "none",
        },
        drawer: {
            width: DRAWER_WIDTH,
            flexShrink: 0,
        },
        drawerPaper: {
            width: DRAWER_WIDTH,
            display: 'flex',
            alignItems: "center",
        },
        drawerHeader: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            width: '100%',
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
        },
        content: {
            height: "calc(100vh - 64px)",
            flexGrow: 1,
            padding: 0,
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -DRAWER_WIDTH,
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



export default useStyles

