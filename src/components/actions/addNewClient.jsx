import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { observer, inject } from 'mobx-react'

const AddNewAclient = inject('clientsStore')(observer((props) => {
    

    const clientsStore = props.clientsStore
    const [firstNameInput, setFirstNameInput] =useState('')
    const [surNameInput, setSurNameInput] =useState('')
    const [countryInput, setCountryInput] =useState('')
    const [ownerInput, setOwnerInput] =useState('')
    const owners = clientsStore.getOwners


    const addUser = () => {
        if(firstNameInput && surNameInput && countryInput && ownerInput){
            alert(`Added a new user: ${firstNameInput} ${surNameInput} from ${countryInput} to ${ownerInput}`)
        } else {
            alert('Please insert all 4 fields!')
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
       <div id="add-new-client-box">
            <h2>Add New Client:</h2>
            <TextField id="standard-basic" type="text" label="First Name" value={firstNameInput} onChange={(e)=>setFirstNameInput(e.target.value)}/> <br/>
            <TextField id="standard-basic" type="text" label="Sur Name" value={surNameInput} onChange={(e)=>setSurNameInput(e.target.value)}/> <br/>
            <TextField id="standard-basic" type="text" label="Country" value={countryInput} onChange={(e)=>setCountryInput(e.target.value)}/> <br/>

            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="owner-input">Owner</InputLabel>
                <Select native value={ownerInput} onChange={(e)=>setOwnerInput(e.target.value)} 
                inputProps={ {name: 'owner-input',id: 'owner-input'}}>
                    <option aria-label="None" value="" />
                    {owners.map(o => <option value={o}>{o}</option>)}
                </Select>
            </FormControl>

            <br/>
            <Button variant="contained" color="primary" onClick={addUser}>Add New Client</Button>

       </div>
    )
}))
        
export default AddNewAclient;
