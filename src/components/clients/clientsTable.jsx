import React from 'react';
import clientsData from '../../data'
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
  ];



function createData(client) {
    const name = client.name.split(' ')
    let surname = ''
    for(let n of name){
        if(n !== name[0]){
            surname+=n
        }
    }

    return { 
    name:name[0],
    surName:surname,                
    country:client.country, 
    firstContact:GetFormattedDate(client.firstContact), 
    email:client.email, 
    sold: client.sold ? <DoneIcon/> : <CloseIcon />, 
    owner:client.owner, 
    id:client._id
    };
}

const rows = clientsData.map( c => createData(c))


const useStyles = makeStyles({
  root: {
    width: '95vw',
  },
  container: {
    maxHeight: '70vh',
  },
});

export default function StickyHeadTable() {
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
    alert("This user is: " + user.name + ' ' + user.surName + user.id)
  }

  return (
    <Paper className={classes.root} id="table">
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
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
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={()=>getUserData(row)}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
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
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}