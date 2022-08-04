import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  appBar: {
    background: "  rgba(0,0,0,0.1)",
  },

  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: "white",
    alignContent: "center",
    padding: "0px 100px 0px 40px",
    [theme.breakpoints.down("lg")]: {
      padding: "0px 40px 0px 25px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 5px 0px 5px",
    },
  },

  button: {
    color: "#D0CBD5",
    paddingLeft: "20px",
    paddingRight: "20px",
  },

  text: {
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "'Dosis'",
    color: "#757575;",
    textTransform: "uppercase",
    textDecoration: "none !important",
    position: "relative",
    display: "block",
    "&:hover": {
      color: "black !important",
    },
    [theme.breakpoints.down(425)]: {
      color: "white",
    },
  },

  VertIcon: {
    color: "#757575",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-end",
    },
  },

  IconButton: {
    backgroundColor: "#ebebeb",
    padding: "15px",
    marginLeft: "10px",
    "&:hover": {
      boxShadow: " 0 0 10px #00a8ff",
      fontSize: 175,
    },
  },

  container: {
    display: "flex",
    justifyContent: "flex-end",
  },

  containerButtons: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: "100px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
    },
  },
}));

export default useStyles;
