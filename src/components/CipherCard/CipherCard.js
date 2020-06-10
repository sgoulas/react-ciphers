import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import withErrorHandling from "../../utils/withErrorHandling";
import CardHeader from "@material-ui/core/CardHeader";
import { createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import IconButton from "@material-ui/core/IconButton";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import CasinoOutlinedIcon from "@material-ui/icons/CasinoOutlined";

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
    // [theme.breakpoints.down("md")]: {
    //   height: "auto",
    // },
    // [theme.breakpoints.up("md")]: {
    //   height: "auto",
    // },
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
    // [theme.breakpoints.down("md")]: {
    //   display: "none",
    // },
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
    shift = false,
  } = props;
  const classes = useStyles();
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [cipherShift, setCipherShift] = useState(
    Math.floor(Math.random() * 26)
  );

  const cipherSpecificProps = {
    ...(shift && {
      cipherShift,
    }),
  };

  const toggleDecryptedText = () => {
    setIsChecked(!isChecked);
  };

  const toggleDescription = () => setShowDescription(!showDescription);

  const rollShift = () => {
    const randomShift = Math.floor(Math.random() * 26);
    setCipherShift(randomShift);
  };

  useEffect(() => {
    const newEncryptedText = text
      ? withErrorHandling(encrypt, text, cipherSpecificProps)
      : "Encrypted text";
    setEncryptedText(newEncryptedText);
  }, [encrypt, text, cipherSpecificProps]);

  useEffect(() => {
    const newDecryptedText =
      encryptedText === "Encrypted text"
        ? "Encrypted text"
        : withErrorHandling(decrypt, encryptedText, cipherSpecificProps);
    setDecryptedText(newDecryptedText);
  }, [decrypt, encryptedText, cipherSpecificProps]);

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
      {showDescription ? null : (
        <CardActions>
          {shift && (
            <IconButton onClick={rollShift}>
              <CasinoOutlinedIcon />
              {cipherShift}
            </IconButton>
          )}
        </CardActions>
      )}
    </Card>
  );
};

export default CipherCard;
