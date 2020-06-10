import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CustomSwitch from "./CustomSwitch";
import withErrorHandling from "../../utils/withErrorHandling";
import CardHeader from "@material-ui/core/CardHeader";
import { createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import IconButton from "@material-ui/core/IconButton";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";

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
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
    [theme.breakpoints.up("md")]: {
      height: "auto",
    },
    width: "auto",
    minWidth: 250,
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
  descriptionShort: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    fontSize: 16,
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
  const [showDescription, setShowDescription] = useState(false);

  const toggleDecryptedText = () => {
    setIsChecked(!isChecked);
  };

  const toggleDescription = () => setShowDescription(!showDescription);

  const title = (
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      {cipherName}
    </Typography>
  );

  const cardHeaderAction = (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={6}>
        <IconButton onClick={toggleDecryptedText}>
          {showDescription ? null : isChecked ? <LockOpenIcon /> : <LockIcon />}
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <IconButton onClick={toggleDescription}>
          {showDescription ? <KeyboardReturnIcon /> : <HelpOutlineIcon />}
        </IconButton>
      </Grid>
    </Grid>
  );

  return (
    <Card className={classes.root}>
      <CardHeader
        action={cardHeaderAction}
        title={title}
        subheader={"subheader"}
      />
      <CardContent>
        {showDescription ? (
          <Typography paragraph className={classes.descriptionShort}>
            {descriptionShort}
          </Typography>
        ) : (
          <Typography variant="h5" className={classes.encrypted}>
            {isChecked ? decryptedText : encryptedText}
          </Typography>
        )}
      </CardContent>
      {showDescription ? null : <CardActions></CardActions>}
    </Card>
  );
};

export default CipherCard;
