import React, { useState, memo } from "react";
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

const TextInput = ({ updateUserInputCallback }) => {
  const [text, setText] = useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
    updateUserInputCallback(value);
  };

  return (
    <CssTextField
      className={classes.margin}
      label="Start typing"
      inputProps={{ "data-testid": "plain-text-input" }}
      value={text}
      onChange={handleChange}
    />
  );
};

const memoizedTextInput = memo(TextInput);

export default memoizedTextInput;
