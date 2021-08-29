import React from 'react'
import ItemCart from '../components/ItemCard'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useBetween } from 'use-between';
import useShareableState from "../useShareableState";
import CartItemCard from '../components/CartItemCard';

export default function Cart() {

	const { cartItem , setCartItem } = useBetween(useShareableState);

	let total = 0;


	return (
		<div>
<h1>Cart</h1>

<Grid container spacing={3}>

<Grid item xs={8}>
{/* <CartItemCard /> */}
  
  
{
		cartItem.map((link, i) => {

		
		 total += cartItem[i].price;
			console.log(typeof total);
		var frame = <CartItemCard 
		title = {cartItem[i].title}
		description = {cartItem[i].description}
		image = {cartItem[i].image}
		price = {cartItem[i].price}
		rating = {cartItem[i].rating?.rate}
		id = {cartItem[i]}
		  
		  />
		return frame;
	})
  }
	{cartItem.frame}
	{console.log("Total", total)}
  
</Grid>

<Grid item xs={3}>
  <Paper >
	  <h2>Total : $ {total}</h2>
  </Paper>
</Grid>

</Grid>

	</div>
	)
}
