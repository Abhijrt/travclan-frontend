import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@material-ui/core';
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';

import { withStyles, makeStyles } from '@material-ui/core/styles';

function Customer(props) {

    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
    });

    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
    }))(TableRow);

    const useStyles = makeStyles({
        table: {
          minWidth: 700,
          width: "50%",
          margin: 'auto'
        },
        img: {
           display: "inline-block"
        },
        toggleBtn: {
            padding: 20,
            alignItems: 'center',
            width: '33%',
            margin: 'auto',
            float: 'right'
        }
    });

    const classes = useStyles();
    const { customerData } = props;
    console.log(customerData);
    return (
      <div>
        <FormGroup row className={classes.toggleBtn}>
            Sort by Bid &nbsp;
            <FormControlLabel
                control={
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                }/>
        </FormGroup>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Customer Name</StyledTableCell>
                        <StyledTableCell align="right">Email</StyledTableCell>
                        <StyledTableCell align="right">Phone</StyledTableCell>
                        <StyledTableCell align="right">Premium</StyledTableCell>
                        <StyledTableCell align="right">Max/Min Bid</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {customerData.map((customer) => (
                    <StyledTableRow key={customer.id} >
                        <StyledTableCell component="th" scope="row" >
                            <Avatar className={classes.img} alt={customer.firsname} src={customer.avatarUrl} />
                            {customer.firstname}
                            &nbsp;
                            {customer.lastname}
                        </StyledTableCell>
                        <StyledTableCell align="right">{customer.email}</StyledTableCell>
                        <StyledTableCell align="right">{customer.phone}</StyledTableCell>
                        <StyledTableCell align="right">{customer.hasPremium ? "True" : "False"}</StyledTableCell>
                        <StyledTableCell align="right">{}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
      </div>
    );
}
  
export default Customer;