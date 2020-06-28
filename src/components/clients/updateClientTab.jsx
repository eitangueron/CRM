import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
const axios = require('axios')
const capitalize = require('capitalize')

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
    //   margin: theme.spacing(1),
    //   width: '25ch',
        }   
    },
    inputTab:{
        width: '90%',
        justifySelf: 'center'
    },
    updateBox:{
        display:'grid',
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
}));



export default function UpdateClient(props) {
    const classes = useStyles();
    const [nameInputBar, setNameInputBar] = useState(props.client.name)
    const [surNameInputBar, setSurNameInputBar] = useState(props.client.surName)
    const [countryInputBar, setCountryInputBar] = useState(props.client.country)
    

    const updateClientDB = async (clientId) => {
        const name = capitalize(nameInputBar) + ' ' + capitalize(surNameInputBar)
        await axios.put(`http://localhost:4000/clients/${clientId}/${name}/${capitalize(countryInputBar)}`)
        .then( res => {
            clientsStore.updateClient(res.data)
            // alert(res.data)
            alert(`Updated client successfully!\n${req.data.name} from ${req.data.country}.\nID:${req.data.id}`)

        })
        // alert(`updated ${clientId} with name ${nameInputBar} surname ${surNameInputBar} country ${countryInputBar}`) //maybe all ?
        props.setUpdateClientTab(false)
    }

  return (
      <div className="update-box">
        <CancelPresentationIcon onClick={() => props.setUpdateClientTab(false)}/>  <br/>
        <TextField id="nameUpdateInput" label="Name" value={nameInputBar} onChange={(e)=>setNameInputBar(e.target.value)}  className={classes.inputTab}/> <br/>
        <TextField id="surNameUpdateInput" label="Sur Name" value={surNameInputBar} onChange={(e)=>setSurNameInputBar(e.target.value)} className={classes.inputTab}/> <br/>
        <TextField id="countryUpdateInput" label="Country" value={countryInputBar} onChange={(e)=>setCountryInputBar(e.target.value)} className={classes.inputTab}/> <br/>
        <Button variant="contained" color="primary" className={classes.button} onClick={()=>updateClientDB(props.client.id)}>Update</Button>
      </div>
  );
}