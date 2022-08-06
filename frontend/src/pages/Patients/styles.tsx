import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down(769)]: {
      marginTop: theme.spacing(15),
    },
    formControl: {
      margin: theme.spacing(1),
      padding: "10px",
      minWidth: 180,
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
  },
  button: {
    background: "rgb(19, 206, 139)",
  },
  filterBar: {
    width: "100%",
    height: 60,
    display: "flex",
    alignItems: "center",
    fontFamily: "'Lato', sans-serif",
    textAlign: "end",
  },
  margin: {
    boxShadow: "0px 0px 2px 0.2px rgba(0,0,0,0.42)",
    width: 200,
    height: 45,
    borderRadius: 4,
    margin: 7,
  },
  text: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "22px",
    fontWeight: 700,
    color: "#6a6a6a",
    letterSpacing: ".5px",
  },
  iconFilter: {
    display: "flex",
    justifyContent: "flex-start",
    flexGrow: 1,
    "&:hover": {
      backgroundColor: "unset !important;",
    },
    padding: "0 0 0 10px !important",
  },
  iconClose: {
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1,
    "&:hover": {
      backgroundColor: "unset !important;",
    },
    padding: "0 0 0 10px !important",
  },
  dropdown: {
    transition: theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.short,
    }),
    color: "rgba(0, 0, 0, 0.54)",
  },
  dropdownOpen: {
    transform: "rotate(0)",
  },
  dropdownClosed: {
    transform: "rotate(180deg)",
  },

  gridInside: {
    display: "grid",
    gridColumnGap: "3%",
    gridRowGap: "24px",
    width: "100%",

    gridTemplateColumns: "auto auto auto auto",
    [theme.breakpoints.down(426)]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  title: {
    display: "flex",
    color: "#6a6a6a",
    fontSize: "22px",
    fontFamily: "'Lato', sans-serif",
    fontWeight: 700,
    letterSpacing: ".5px",
  },
  gridItens: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  pagination: {
    background: "white",
  },

  gridItem: {
    background: "rgb(255,255,255,0.97)",
    padding: "20px !important",
    marginBottom: "20px",
    boxShadow:
      "0px 1px 3px 0px rgb(0 0 0 / 25%), 0px 1px 1px 0px rgb(0 0 0 / 18%), 0px 2px 1px -1px rgb(0 0 0 / 14%)",
  },
  grid: {
    background: "rgb(248,248,255, 0.1)",
    padding: "15px",
    margin: "15px",
    display: "block",
    width: "96%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  form: {
    width: "100%",
    display: "flex;",
    alignItems: " center",
    flexDirection: "column",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  error: {
    color: "red",
    marginTop: 1,
    marginLeft: 15,
    fontFamily: "Verdana",
  },
  CardContent: {
    width: "30ch",
    padding: "16px 16px 2px 16px;",
  },
  detailButton: {
    justifyContent: "flex-end",
  },
  padding: {
    padding: "10px 0px 15px 20px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px 15px 25px",
    },
    [theme.breakpoints.down(350)]: {
      padding: "10px 0px 15px 0px !important",
    },
  },
}));

export default useStyles;
