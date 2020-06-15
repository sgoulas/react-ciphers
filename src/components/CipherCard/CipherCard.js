import React, { useContext } from "react";
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
import FileCopyIcon from "@material-ui/icons/FileCopy";
import TextContext from "../../Context/TextContext";

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

const CipherCard = ({
  name,
  description,
  encrypt,
  decrypt,
  shift = false,
  keyGenerator,
  numberOfKeys = 0,
}) => {
  const classes = useStyles();
  const text = useContext(TextContext);
  const {
    encryptedText,
    decryptedText,
    cipherShift,
    showDescription,
    showDecryption,
    key_1,
    key_2,
    rollShift,
    toggleDecryptedText,
    toggleDescription,
    generateFirstKey,
    generateSecondKey,
    copyEncryptedText,
  } = useCipherCard(text, encrypt, decrypt, shift, keyGenerator, numberOfKeys);

  const title = (
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      {name}
    </Typography>
  );

  const cardHeaderAction = (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <IconButton onClick={toggleDecryptedText}>
          {showDescription ? null : showDecryption ? (
            <LockOpenIcon />
          ) : (
            <LockIcon />
          )}
        </IconButton>
      </Grid>
      <Grid itemScope>
        <IconButton onClick={copyEncryptedText}>
          {showDescription ? null : <FileCopyIcon />}
        </IconButton>
      </Grid>
      <Grid item>
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
      <Grid item xs={12}>
        <IconButton onClick={generateFirstKey}>
          <VpnKeyIcon />
        </IconButton>
        <Typography variant="inherit" className={classes.key}>
          {key_1}
        </Typography>
      </Grid>
      {numberOfKeys === 2 && (
        <Grid item xs={12}>
          <IconButton onClick={generateSecondKey}>
            <VpnKeyIcon />
          </IconButton>
          <Typography variant="inherit" className={classes.key}>
            {key_2}
          </Typography>
        </Grid>
      )}
    </Grid>
  );

  return (
    <Card className={classes.root}>
      <CardHeader action={cardHeaderAction} title={title} />
      <CardContent className={classes.cardContent}>
        {showDescription ? (
          <Typography paragraph className={classes.description}>
            {description}
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
