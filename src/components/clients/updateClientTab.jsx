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
        if(nameInputBar && surNameInputBar && countryInputBar){
            const name = capitalize(nameInputBar) + ' ' + capitalize(surNameInputBar)
            const country= capitalize(countryInputBar)
            await axios.put(`http://localhost:4000/clients/${parseInt(clientId)}/${name}/${country}`)
            .then( res => {
                if(res.data.status === 'success'){
                    const clientData = {id:clientId, name:name, country:country}
                    props.clientsStore.updateClient(clientData)
                    alert(`Updated client successfully!\n${res.data.name} from ${country}.\nID: ${res.data.id}`)
                } else {
                    alert(res.data)
                }
            })
            props.setUpdateClientTab(false)
        } else {
            alert('Must enter name, sur name and country!')
        }
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