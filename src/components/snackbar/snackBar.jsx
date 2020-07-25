import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { inject, observer } from 'mobx-react';
import { AlertTitle } from '@material-ui/lab';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default inject('clientsStore')(observer(function CustomizedSnackbars(props) {


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.clientsStore.setSnackBar('','','',false);
  };

  return (
    <div >
      <Snackbar open={props.clientsStore.snackBarOpen} autoHideDuration={6000} 
      onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
        <Alert onClose={handleClose} severity={props.clientsStore.snackBarType}>
          <AlertTitle>{props.clientsStore.snackBarTextTitle}</AlertTitle>
          {props.clientsStore.snackBarTextContent}
        </Alert>
      </Snackbar>

    </div>
  );
}))
