import { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardBackspaceSharp from '@material-ui/icons/KeyboardBackspaceSharp';
import  { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

function CustomerDetail(props) {

    const [customerDetail, setCustomerDetail] = useState([]);

    useEffect(() => {
        const url = 'https://intense-tor-76305.herokuapp.com/merchants?id=' + props.match.params.customer_id;
        fetch(url,{
            method: 'GET',
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }).then((response) => response.json())
          .then((data) => {
            setCustomerDetail(data[0]);
          });
    },[]);

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

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
            margin: 'auto'
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: '#3f51b5',
        },
        backBtn: {
            textAlign: 'center',
            background: '#3f51b5',
            width: "6%",
            margin: 'auto',
            marginTop: 30,
            marginBottom: 30,
            borderRadius: 12,
            paddingBottom: 10
        },
        link: {
            textDecoration: 'none',
            color: 'white'
        },
        icon: {
            position: 'relative',
            top: '5px'
        },
        bids: {
            margin: 50,
        },
        table: {
            minWidth: 700,
            width: "50%",
            margin: 'auto'
        },
        error: {
            background: '#3f51b5',
            color: 'white',
            padding: 10,
            width: '50%',
            margin: 'auto',
            textAlign: 'center',
            marginTop: 30
        }
    }));

    const classes = useStyles();

    if(customerDetail.length === 0) {
        return <div></div>;
    }
    return (
        <div>
            <Link to="/" className={classes.link}>
                <div className={classes.backBtn}>
                    <KeyboardBackspaceSharp className={classes.icon}/> Back
                </div>
            </Link>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {customerDetail.firstname.substring(0,1)}
                        </Avatar>
                    }
                    title={customerDetail.firstname + " " + customerDetail.lastname}
                    subheader={customerDetail.email}
                />
                <CardMedia
                    className={classes.media}
                    image={customerDetail.avatarUrl}
                    title={customerDetail.firstname}
                />
            </Card>
            { customerDetail.bids.length ?
                (<div className={classes.bids}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>S.No</StyledTableCell>
                                    <StyledTableCell align="right">Car Title</StyledTableCell>
                                    <StyledTableCell align="right">Amount</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {customerDetail.bids.map((bid,index) => (
                                <StyledTableRow key={bid.id} >
                                    <StyledTableCell>{index}</StyledTableCell>
                                    <StyledTableCell align="right">{bid.carTitle}</StyledTableCell>
                                    <StyledTableCell align="right">{bid.amount}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>)
            : <div className={classes.error}>
                Oh! You Don't have Any Bids
            </div>  }
        </div>
    );
}

export default CustomerDetail;



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// import tileData from './tileData';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     flexWrap: 'nowrap',
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: 'translateZ(0)',
//   },
//   title: {
//     color: theme.palette.primary.light,
//   },
//   titleBar: {
//     background:
//       'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//   },
// }));

// export default function SingleLineGridList() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <GridList className={classes.gridList} cols={2.5}>
//         {tileData.map((tile) => (
//           <GridListTile key={tile.img}>
//             <img src={tile.img} alt={tile.title} />
//             <GridListTileBar
//               title={tile.title}
//               classes={{
//                 root: classes.titleBar,
//                 title: classes.title,
//               }}
//               actionIcon={
//                 <IconButton aria-label={`star ${tile.title}`}>
//                   <StarBorderIcon className={classes.title} />
//                 </IconButton>
//               }
//             />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }
