import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      marginRight: theme.spacing(8),
      color:"white",
      fontSize: "xx-large",
      textDecoration: "none",
      fontWeight: 700,
    },
    container: {
        backgroundColor: '#1a76d2',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width:'100vw'
    }
  }));
  

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.container}>
        <Toolbar>
            <Link to="/clients">
                <Typography variant="h6" className={classes.title}>Clients</Typography>
            </Link>
            <Link to="/actions">
            <Typography variant="h6" className={classes.title}>Actions</Typography>
            </Link>
            <Link to="/analytics">
            <Typography variant="h6" className={classes.title}>Analytics</Typography>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}