import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cards: {
    margin: "40px 0;",
  },
  text: {
    fontFamily: "'Dosis', sans-serif",
    color: "white",
    [theme.breakpoints.down(769)]: {
      fontSize: 30,
    },
  },

  box: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down(769)]: {
      marginTop: theme.spacing(15),
    },
  },
}));
export default useStyles;
