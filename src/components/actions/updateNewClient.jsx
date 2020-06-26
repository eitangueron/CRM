import React, {useState} from 'react';
import { observer , inject} from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';

const UpdateNewClient = inject('clientsStore')(observer((props) => {
    
    const clients = props.clientsStore.clients
    const [clientName, setClientName] = useState('')  
    const [ownerInput, setOwnerInput] =useState('')
    const [emailInput, setEmailInput] =useState('')
    const owners = props.clientsStore.getOwners
    const emailTypes = ['A', 'B', 'C', 'D']

    const updateOwner = () => {
        if(ownerInput && clientName){
            alert('sent an update command to db')
        } else {
            alert('pick a new owner or a clients name')
        }
    }

    const updateEmail = () => {
        if(emailInput && clientName){
            alert('sent an update command to db')
        } else {
            alert('pick an email type or a clients name')
        }
    }

    const declareSale = () => {
        if(clientName){
            alert('send an update command to db to change sale to true')
        } else {
            alert('pick a client name')
        }
    }

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
    const classes = useStyles();

    return (
       <div>
           <h3>Update clients info:</h3>
           {/* <label for="client-name-input">Client:</label>
            <input list="client-name-input-list" name="client-name-input" id="client-name-input" value={clientName} onChange={(e)=>setClientName(e.target.value)} placeholder="Client name"/>
            <datalist id="client-name-input-list">
                {clients.map( c => <option value={c.name +' '+ c.surName} />)}
            </datalist> */}
            <InputLabel htmlFor="client-name-input">Enter clients name:</InputLabel>
            <Autocomplete id="client-name-input"
            options={clients} getOptionLabel={(c) => c.name +' '+ c.surName} style={{ width: 300 }} 
            renderInput={(params) => <TextField {...params} variant="outlined" 
            value={clientName} onChange={(e)=>setClientName(e.target.value)}/>}/>
             <br/>
            <label for="owner-input">Transfer ownership to:</label>
            <select id="owner-input" placeholder="Owner" value={ownerInput} onChange={(e)=>setOwnerInput(e.target.value)}>
                <option value=''>Owner</option>
                {owners.map(o => <option value={o}>{o}</option>)}
            </select>
            <button onClick={updateOwner}>Transfer!</button> <br/>
            <label for="email-input">Send email:</label>
            <select id="email-input" placeholder="Email Type" value={emailInput} onChange={(e)=>setEmailInput(e.target.value)}>
                <option value=''>Email Type</option>
                {emailTypes.map(o => <option value={o}>{o}</option>)}
            </select>
            <button onClick={updateEmail}>Send!</button> <br/>
            <span>Declare sale!</span>
            <button onClick={declareSale}>Declare!</button>

       </div>
    )
}))
        
export default UpdateNewClient;
