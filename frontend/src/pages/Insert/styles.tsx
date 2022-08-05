import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  initialBox: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down(769)]: {
      marginTop: theme.spacing(15),
    },
  },
  grid: {
    background: "rgb(248,248,255, 0.1)",
    padding: "15px",
    margin: "15px",
    minHeight: "48vh",
    display: "block",
    width: "96%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  text: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "22px",
    fontWeight: 700,
    color: "#6a6a6a",
    letterSpacing: ".5px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "end",
    width: "100%",
    height: "100%",
  },
  icon: {
    paddingLeft: "5px",
    fontSize: "24px",
    verticalAlign: "sub",
  },

  gridItem: {
    background: "rgb(255,255,255,0.97)",
    padding: "20px !important",
    marginBottom: "20px",
    boxShadow:
      "0px 1px 3px 0px rgb(0 0 0 / 25%), 0px 1px 1px 0px rgb(0 0 0 / 18%), 0px 2px 1px -1px rgb(0 0 0 / 14%)",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },

  iconDown: {
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1,
    padding: "12px 12px 12px 0px",
    "&:hover": {
      backgroundColor: "unset !important;",
    },
  },
  labelIcon: {
    "&:hover": {
      backgroundColor: "unset !important;",
      padding: "12px 0px 12px 12px",
    },
  },
  button: {
    background: "#13335f",
    color: "white",
    textTransform: "capitalize",
    fontSize: 15,
  },

  textfield: {
    margin: 8,
    maxWidth: "120ch",
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
  error: {
    color: "red",
    marginTop: 1,
    marginLeft: 15,
    fontFamily: "Verdana",
  },
  gridInside: {
    display: "grid",
    gridColumnGap: "3%",
    gridRowGap: "24px",
    width: "100%",
    marginBottom: "24px",
    gridTemplateColumns: "48% auto",
    [theme.breakpoints.down(426)]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  gridItens: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  form: {
    width: "100%",
    display: "flex;",
    alignItems: " center",
    flexDirection: "column",
  },
}));

export default useStyles;
