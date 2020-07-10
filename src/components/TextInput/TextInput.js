import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    width: 450,
    "& label.Mui-focused": {
      color: "#264653",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#264653",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#264653",
      },
      "&:hover fieldset": {
        borderColor: "#E76F51",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#E76F51",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const TextInput = (props) => {
  const { text, setText } = props;
  const classes = useStyles();

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  return (
    <CssTextField
      className={classes.margin}
      label="Start typing"
      id="plain-text-input"
      value={text}
      onChange={handleChange}
    />
  );
};

export default TextInput;
