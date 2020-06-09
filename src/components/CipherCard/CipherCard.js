import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: "auto",
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
    encryptedText === "Encrypted text" ? "" : decrypt(encryptedText);
  const [showDecryption, setShowDecryption] = useState(false);

  const toggleDecryption = () => {
    setShowDecryption(!showDecryption);
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
          {encryptedText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={toggleDecryption}>
          Learn More {showDecryption ? decryptedText : null}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CipherCard;
