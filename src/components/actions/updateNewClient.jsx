import React, {useState} from 'react';
import { observer , inject} from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
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


    return (
       <div id="update-user-info-container">  
           <div id="pick-client-name-box">
            <h2>Update clients info:</h2>
                <InputLabel htmlFor="client-name-input">Enter clients name:</InputLabel>
                <Autocomplete id="client-name-input"
                options={clients} getOptionLabel={(c) => c.name +' '+ c.surName} style={{ width: 300 }} 
                renderInput={(params) => <TextField {...params} variant="outlined" 
                value={clientName}/>}
                onInputChange={(e,newV)=>setClientName(newV)} />
                <br/>
            </div>
             <div id="transfer-owner-box" className="update-user-info-actionsPage-box">
                <h3>Transfer Owner:</h3>
                <InputLabel htmlFor="owner-input">Transfer ownership to:</InputLabel>
                <Select native value={ownerInput} onChange={(e)=>setOwnerInput(e.target.value)} 
                    inputProps={ {name: 'owner-input',id: 'owner-input'}}>
                        <option aria-label="None" value="" disabled>*New Owner</option>
                        {owners.map(o => <option value={o}>{o}</option>)}
                    </Select>
                    <br/>
                    <Button variant="contained" color="primary" onClick={updateOwner}>Transfer Owner!</Button>
                    <br/>
             </div>
             <div id="send-email-box" className="update-user-info-actionsPage-box">
                <h3>Send Email:</h3>
                <InputLabel htmlFor="email-input">Pick email to send:</InputLabel>
                <Select native value={emailInput} onChange={(e)=>setEmailInput(e.target.value)} 
                    inputProps={ {name: 'email-input',id: 'email-input'}}>
                        <option aria-label="None" value="" disabled>*Email Type</option>
                        {emailTypes.map(o => <option value={o}>{o}</option>)}
                    </Select>
                    <br/>
                    <Button variant="contained" color="primary" onClick={updateEmail}>Send Email!</Button>
                    <br/>
             </div>
            <div id="declare-sale-box" className="update-user-info-actionsPage-box">
                <h3>Declare sale:</h3>
                <br/>
                <Button variant="contained" color="primary" onClick={declareSale}>Declare!</Button>
            </div>

       </div>
    )
}))
        
export default UpdateNewClient;










