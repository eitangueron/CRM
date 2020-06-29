import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { observer, inject } from 'mobx-react'
import Axios from 'axios';
const capitalize = require('capitalize')
const dateformat = require('dateformat')

const AddNewAclient = inject('clientsStore')(observer((props) => {
    

    const clientsStore = props.clientsStore
    const [firstNameInput, setFirstNameInput] =useState('')
    const [surNameInput, setSurNameInput] =useState('')
    const [countryInput, setCountryInput] =useState('')
    const [ownerInput, setOwnerInput] =useState('')
    const owners = clientsStore.getOwners


    const addUser = () => {
        if(firstNameInput && surNameInput && countryInput && ownerInput){
            const name = capitalize(firstNameInput) + ' ' + capitalize(surNameInput)
            const country = capitalize(countryInput)
            const owner = capitalize(ownerInput)
            const date = new Date()
            Axios.post(`http://localhost:4000/clients/${name}/${country}/${owner}/${dateformat(date,'isoDate')}`).then( res => {
                if(res.data.status==='success'){
                    alert(`Added a new user: ${name} from ${country} to ${owner}`)
                    setFirstNameInput('')
                    setSurNameInput('')
                    setCountryInput('')
                    setOwnerInput('')
                } else {
                    alert ('seems to be a problem with adding a new client')
                }
            })
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
            <TextField id="first-name-input-new-client" type="text" label="First Name" value={firstNameInput} onChange={(e)=>setFirstNameInput(e.target.value)}/> <br/>
            <TextField id="sur-name-input-new-client" type="text" label="Sur Name" value={surNameInput} onChange={(e)=>setSurNameInput(e.target.value)}/> <br/>
            <TextField id="country-input-new-client" type="text" label="Country" value={countryInput} onChange={(e)=>setCountryInput(e.target.value)}/> <br/>

            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="owner-input">Owner</InputLabel>
                <Select native value={ownerInput} onChange={(e)=>setOwnerInput(e.target.value)} 
                inputProps={ {name: 'owner-input',id: 'owner-input'}}>
                    <option aria-label="None" value="" />
                    {owners.map((o,i) => <option value={o} key={'ownerName'+i}>{o}</option>)}
                </Select>
            </FormControl>

            <br/>
            <Button variant="contained" color="primary" onClick={addUser}>Add New Client</Button>

       </div>
    )
}))
        
export default AddNewAclient;
