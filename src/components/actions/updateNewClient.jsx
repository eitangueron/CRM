import React, {useState} from 'react';
import { observer , inject} from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';


const UpdateNewClient = inject('clientsStore')(observer((props) => {
    
    const clientsNames = props.clientsStore.clients
    const [clientName, setClientName] = useState('')  
    const [ownerInput, setOwnerInput] =useState('')
    const owners = props.clientsStore.getOwners

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
           <h3>UPDATE</h3>
           <label for="client-name-input">Client:</label>
            <input list="client-name-input-list" name="client-name-input" id="client-name-input" value={clientName} onChange={(e)=>setClientName(e.target.value)} placeholder="Client name"/>
            <datalist id="client-name-input-list">
                {clientsNames.map( c => <option value={c.name +' '+ c.surName} />)}
            </datalist> <br/>
            <label for="owner-input">Transfer ownership to:</label>
            <select id="owner-input" placeholder="Owner" value={ownerInput} onChange={(e)=>setOwnerInput(e.target.value)}>
                <option value=''>Owner</option>
                {owners.map(o => <option value={o}>{o}</option>)}
            </select>
            <button>Transfer!</button>
       </div>
    )
}))
        
export default UpdateNewClient;
