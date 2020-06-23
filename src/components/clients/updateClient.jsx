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
        width: '90%',
        justifySelf: 'center',
        marginBottom: '2%',
        marginTop: '1%',
    },
    inputTab:{
        width: '80%',
        justifySelf: 'center'
    },
    updateBox:{
        display:'grid',
    }
  },
}));

export default function UpdateClient(props) {
  const classes = useStyles();

  return (
      <div className="update-box">
        <CancelPresentationIcon onClick={() => props.setUpdateClientTab(false)}/>  <br/>
        <TextField id="nameUpdateInput" label="Name" value={props.client.name} className={classes.inputTab}/> <br/>
        <TextField id="surNameUpdateInput" label="Sur Name" value={props.client.surName} className={classes.inputTab}/> <br/>
        <TextField id="countryUpdateInput" label="Country" value={props.client.country} className={classes.inputTab}/> <br/>
        <Button variant="contained" color="primary" className={classes.button} >Update</Button>
      </div>
  );
}