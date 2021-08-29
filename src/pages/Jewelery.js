import React from 'react'
import ItemCart from '../components/ItemCard'


import Grid from '@material-ui/core/Grid';

import { useBetween } from 'use-between';
import useShareableState from "../useShareableState";

export default function Jewelery() {

	const {jewelery, setJewelery} = useBetween(useShareableState);


	return (
		<div>
	 <h1>Jewelery</h1>

 <Grid container spacing={1} style={{paddingTop:"2rem"}}>
			{
			jewelery.map((link, i) => {

			var frame = <ItemCart 
			title = {jewelery[i].title}
			description = {jewelery[i].description}
			image = {jewelery[i].image}
			price = {jewelery[i].price}
			rating = {jewelery[i].rating?.rate}
			id = {jewelery[i]}
			  
			  />
			return frame;
		})
	  }
		{jewelery.frame}

		</Grid>
		</div>
	)
}
