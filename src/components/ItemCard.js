import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { useBetween } from 'use-between';
import useShareableState from "../useShareableState";


const useStyles = makeStyles({
	root: {
	  maxWidth: 385,
	},
	media: {
		maxWidth: 385,
	  height: 240,
	},
  });

export default function ItemCart(props) {
	const classes = useStyles();

	const {details, setDetails} = useBetween(useShareableState);
	const { cartItem , setCartItem } = useBetween(useShareableState);

	console.log("C I : ", cartItem);
	const handleChange = () => {

		cartItem.push(props.id)
		setCartItem(cartItem);
		console.log("Props ID :", props.id);
		console.log("arr Cart :", cartItem);

	}



	console.log("Cart : ", cartItem);

	return (
		<Grid item xs={3}>

	
		<Card className={classes.root}>
		<CardActionArea>
		  <CardMedia
			className={classes.media}
			image={props.image}
			title="Contemplative Reptile"
		  />
		  <CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			{props.title}
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
			  {props.description}
			</Typography>
		  </CardContent>
		</CardActionArea>
		<CardActions>
		  <Button size="small" color="primary">
			$ {props.price}
		  </Button>
		  <Button size="small" color="primary">
		  {props.rating}
		  </Button>
		  <Button onClick={() => handleChange()}  size="small" variant="contained" color="primary">
		  ADD To Cart
		  </Button>
		</CardActions>
	  </Card>

	  </Grid>
	);
  }
