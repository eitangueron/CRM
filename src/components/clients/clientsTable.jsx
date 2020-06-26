import React, {useState} from 'react';
// import clientsData from '../../data'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import UpdateClient from './updateClient';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {observer, inject} from 'mobx-react'


function GetFormattedDate(date) {
    var todayTime = new Date(date)
    var month = todayTime.getMonth() + 1;
    var day = todayTime.getDate();
    var year = todayTime.getFullYear();
    return month + "/" + day + "/" + year;
}

const columns = [
    { id: 'name', label: 'Name', minWidth: '10%' },
    { id: 'surName', label: 'Sur Name', minWidth: '10%' },
    { id: 'country', label: 'Country', minWidth: '10%' },
    { id: 'firstContact', label: 'First Contact', minWidth: '10%'},
    { id: 'email', label: 'Email', minWidth: '10%' },
    { id: 'sold', label: 'Sold', minWidth: '10%' },
    { id: 'owner', label: 'Owner', minWidth: '10%' },
    { id: 'delete', label: '', minWidth: '10%' },
  ];



function createData(client) {
    const name = client.name.split(' ')
    let surname = ''
    for(let n of name){
        if(n !== name[0]){
          if(n!==name[1]){
            surname+=' '
          }
            surname+=n
          }
    }

    return { 
    name:name[0],
    surName:surname,                
    country:client.country, 
    firstContact:GetFormattedDate(client.firstContact), 
    email:client.emailType ? client.emailType : '-', 
    sold: client.sold ? <DoneIcon/> : <CloseIcon />, 
    owner:client.owner, 
    id:client._id,
    key:client._id,
    delete: <DeleteForeverIcon className="delete-button" onClick={()=>alert(client._id)}/>
    };
}


const useStyles = makeStyles({
  root: {
    width: '95vw',
  },
  container: {
    maxHeight: '70vh',
  },
});




const StickyHeadTable = inject('clientsStore')(observer((props) => {

  const clientsStore = props.clientsStore

  const clientsDataFiltered = clientsStore.getFilteredClients

  const rows = clientsDataFiltered.map( c => createData(c))

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getUserData = (user) => {
      setClient(user)
      setUpdateClientTab(true)
  }

  const [updateClientTab , setUpdateClientTab] = useState(false)
  const [client, setClient] = useState('')

  return (
    <div id="full-table">
      <Paper className={classes.root} id="table">
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead >
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} onClick={column.id !=='delete' ? ()=>getUserData(row):null}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100, 250]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      { updateClientTab ? <UpdateClient client={client} setUpdateClientTab={setUpdateClientTab}/> : null }
    </div>
  );
}))

export default StickyHeadTable