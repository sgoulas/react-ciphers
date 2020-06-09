import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CustomSwitch from "./CustomSwitch";
import withErrorHandling from "../../utils/withErrorHandling";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles({
  root: {
    height: 200,
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
  const {
    cipherName = "cipher name",
    descriptionShort = "descriptionShort",
    text = "",
    encrypt,
    decrypt,
  } = props;
  const classes = useStyles();
  const encryptedText = text
    ? withErrorHandling(encrypt, text)
    : "Encrypted text";
  const decryptedText =
    encryptedText === "Encrypted text"
      ? "Encrypted text"
      : withErrorHandling(decrypt, encryptedText);

  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (event) => {
    setIsChecked(!isChecked);
  };

  const title = (
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      {cipherName}
    </Typography>
  );

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <CustomSwitch
            isChecked={isChecked}
            handleSwitchChange={handleSwitchChange}
          />
        }
        title={title}
        subheader={descriptionShort}
      />
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.encrypted}>
          {isChecked ? decryptedText : encryptedText}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default CipherCard;
