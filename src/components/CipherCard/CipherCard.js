import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import IconButton from "@material-ui/core/IconButton";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import CasinoOutlinedIcon from "@material-ui/icons/CasinoOutlined";
import useCipherCard from "../../utils/useCipherCard";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

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
  shift: {
    color: "#264653",
  },
  key: {
    color: "#264653",
  },
});

const CipherCard = ({
  name = "cipher name",
  descriptionShort = "descriptionShort",
  text = "",
  encrypt,
  decrypt,
  shift = false,
  keyGenerator = null,
}) => {
  const classes = useStyles();
  const {
    encryptedText,
    decryptedText,
    cipherShift,
    showDescription,
    isChecked: showDecryption,
    key_1,
    key_2,
    rollShift,
    toggleDecryptedText,
    toggleDescription,
    generateFirstKey,
    generateSecondKey,
  } = useCipherCard(text, encrypt, decrypt, shift, keyGenerator);

  const title = (
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      {name}
    </Typography>
  );

  const cardHeaderAction = (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={6}>
        <IconButton onClick={toggleDecryptedText}>
          {showDescription ? null : showDecryption ? (
            <LockOpenIcon />
          ) : (
            <LockIcon />
          )}
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <IconButton onClick={toggleDescription}>
          {showDescription ? <KeyboardReturnIcon /> : <HelpOutlineIcon />}
        </IconButton>
      </Grid>
    </Grid>
  );

  const shiftAction = shift && (
    <>
      <IconButton onClick={rollShift}>
        <CasinoOutlinedIcon />
      </IconButton>
      <Typography variant="h6" className={classes.shift}>
        {cipherShift}
      </Typography>
    </>
  );

  const keysAction = keyGenerator && (
    <Grid container direction="column" justify="center" alignItems="flex-start">
      <Grid>
        <IconButton onClick={generateFirstKey}>
          <VpnKeyIcon />
        </IconButton>
        <Typography variant="p" className={classes.key}>
          {key_1}
        </Typography>
      </Grid>
      <Grid>
        <IconButton onClick={generateSecondKey}>
          <VpnKeyIcon />
        </IconButton>
        <Typography variant="p" className={classes.key}>
          {key_2}
        </Typography>
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
            {showDecryption ? decryptedText : encryptedText}
          </Typography>
        )}
      </CardContent>
      {showDescription ? null : (
        <CardActions>
          {shiftAction}
          {keysAction}
        </CardActions>
      )}
    </Card>
  );
};

export default CipherCard;
