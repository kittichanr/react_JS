import size from './size'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Pallete: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      },
      colors: {
        height: "90%",
      },
      goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        marginBottom: "-0.35px",
        opacity: "1",
        backgroundColor: "black",
        "& a": {
          color: "white",
          width: "100px",
          height: "30px",
          position: "absolute",
          display: "inline-block",
          top: "50%",
          left: "50%",
          marginLeft: "-50px",
          marginTop: "-15px",
          textAlign: "center",
          outline: "none",
          background: "rgba(255, 255, 255, 0.3)",
          fontSize: "1rem",
          lineHeight: "30px",
          textTransform: "uppercase",
          border: "none",
          textDecoration: "none",
        },
        [size.down('lg')]:{
          width: '25%',
          height: '33.3333%'
        },
        [size.down('md')]:{
          width: '50%',
          height: '20%'
        },
        [size.down('xs')]:{
          width: '100%',
          height: '10%'
        }
      },
}