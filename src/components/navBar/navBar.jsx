import React, {useState} from 'react';
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

  const [currentPage, setCurrentPage] = useState(document.location.pathname)

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.container}>
        <Toolbar>
            <Link to="/clients" onClick={()=>setCurrentPage('/clients')}>
                <Typography variant="h6" className={classes.title} 
                style={currentPage==='/clients' || currentPage==='/' ? {color:'gold'}:null }>Clients</Typography>
            </Link>
            <Link to="/actions" onClick={()=>setCurrentPage("/actions")}>
              <Typography variant="h6" className={classes.title}
              style={currentPage==='/actions' ? {color:'gold'}:null }>Actions</Typography>
            </Link>
            <Link to="/analytics" onClick={()=>setCurrentPage("/analytics")}>
            <Typography variant="h6" className={classes.title}
            style={currentPage==='/analytics' ? {color:'gold'}:null }>Analytics</Typography>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}