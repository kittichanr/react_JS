import size from './size'
import bg from '../images/bg.svg'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  '@global': {
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out'
    },
  },
  root: {
    height: '100vh',
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#2f1dbd",
    backgroundImage: `url(${bg})`,
    overflow: 'scroll',
  },
  heading: {
    fontSize: '2rem'
  },
  container: {
    width: "60%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [size.down('xl')]: {
      width: '80%'
    },
    [size.down('xs')]: {
      width: '75%'
    }
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    color: "white",
    "& a": {
      color: "white",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [size.down('md')]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [size.down('xs')]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem",
    }
  },
}
