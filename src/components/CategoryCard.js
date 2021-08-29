import React from 'react'
import {Link} from "react-router-dom"


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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

export default function CategoryCard(props) {
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

<Link to={props.path}>
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
		  </CardContent>
		</CardActionArea>
	
	  </Card>
</Link>

	  </Grid>
	);
  }
