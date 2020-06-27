import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles({
  root: {
    width: "auto",
    minWidth: 250,
    height: 270,
    backgroundColor: "#2A9D8F",
    color: "#fff",
  },
  cardContent: {
    [theme.breakpoints.up("xl")]: {
      width: 700,
    },
  },
  title: {
    fontSize: 18,
    color: "#264653",
  },
  description: {
    fontSize: 16,
    color: "#264653",
  },
  encrypted: {
    minWidth: 50,
    fontSize: 28,
    color: "#E9C46A",
    textOverflow: "ellipsis",
    overflowX: "hidden",
  },
  shift: {
    color: "#264653",
  },
  key: {
    color: "#264653",
  },
});

export default useStyles;
