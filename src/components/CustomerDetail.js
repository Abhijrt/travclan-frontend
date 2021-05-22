import { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardBackspaceSharp from '@material-ui/icons/KeyboardBackspaceSharp';
import  { Link } from 'react-router-dom';
 
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
            backgroundColor: red[500],
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
        }
    }));

    const classes = useStyles();

    if(customerDetail.length === 0) {
        return <div></div>;
    }

    console.log(customerDetail)

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
                    title="Paella dish"
                />
            </Card>
        </div>
    );
}

export default CustomerDetail;



// import React from 'react';



// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
   
//   );
// }
