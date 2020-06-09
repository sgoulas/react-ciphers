import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CustomSwitch from "./CustomSwitch";

const useStyles = makeStyles({
  root: {
    width: "auto",
    backgroundColor: "#2A9D8F",
    color: "#fff",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
    color: "#264653",
  },
  encrypted: {
    fontSize: 28,
    color: "#E9C46A",
  },
  pos: {
    marginBottom: 12,
  },
});

const CipherCard = (props) => {
  const { cipherName = "cipher name", text = "", encrypt, decrypt } = props;
  const classes = useStyles();
  const encryptedText = text ? encrypt(text) : "Encrypted text";
  const decryptedText =
    encryptedText === "Encrypted text"
      ? "Encrypted text"
      : decrypt(encryptedText);

  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (event) => {
    setIsChecked(!isChecked);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {cipherName}
        </Typography>
        <Typography variant="h5" component="h2" className={classes.encrypted}>
          {isChecked ? decryptedText : encryptedText}
        </Typography>
      </CardContent>
      <CardActions>
        <CustomSwitch
          isChecked={isChecked}
          handleSwitchChange={handleSwitchChange}
        />
      </CardActions>
    </Card>
  );
};

export default CipherCard;
