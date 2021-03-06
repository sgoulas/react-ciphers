import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
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
import useStyles from "./styles";

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

  const encryptedTextID = `${name}-encrypted-text`;
  const decryptedTextID = `${name}-decrypted-text`;
  const cipherDescID = `${name}-description`;
  const toggleDecryptedTextButtonID = `${name}-toggle-decryption`;
  const toggleDescriptionButtonID = `${name}-toggle-description`;
  const copyTextButtonID = `${name}-copy-encrypted-text-button`;

  const title = (
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      {name}
    </Typography>
  );

  const cardHeaderAction = (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <IconButton
          onClick={toggleDecryptedText}
          data-testid={toggleDecryptedTextButtonID}
        >
          {showDescription ? null : showDecryption ? (
            <LockOpenIcon />
          ) : (
            <LockIcon />
          )}
        </IconButton>
      </Grid>
      <Grid itemScope>
        <IconButton onClick={copyEncryptedText} data-testid={copyTextButtonID}>
          {showDescription ? null : <FileCopyIcon />}
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          onClick={toggleDescription}
          data-testid={toggleDescriptionButtonID}
        >
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
          <Typography
            paragraph
            className={classes.description}
            data-testid={cipherDescID}
          >
            {description}
          </Typography>
        ) : (
          <Typography
            variant="h5"
            className={classes.encrypted}
            data-testid={showDecryption ? decryptedTextID : encryptedTextID}
          >
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
