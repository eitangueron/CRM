import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
    //   margin: theme.spacing(1),
    //   width: '25ch',
    },
    box:{
        border:'solid black 2px'
    },
    button:{
        fontSize: 12
    },
    inputTab:{
        display:'block',
    }
  },
}));

export default function UpdateClient() {
  const classes = useStyles();

  return (
      <div className="update-box">
        <CancelPresentationIcon className={classes.button} />  <br/>
        <TextField id="nameUpdateInput" label="Name" className={classes.inputTab}/> <br/>
        <TextField id="surNameUpdateInput" label="Sur Name" className={classes.inputTab}/> <br/>
        <TextField id="countryUpdateInput" label="Country" className={classes.inputTab}/> <br/>
        <Button variant="contained" color="primary">Update</Button>
      </div>
  );
}