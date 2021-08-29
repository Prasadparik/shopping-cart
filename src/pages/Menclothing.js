import React, {useState, useEffect} from 'react'
import ItemCart from '../components/ItemCard'
import Axios from 'axios'

import Grid from '@material-ui/core/Grid';


import { useBetween } from 'use-between';
import useShareableState from "../useShareableState";

export default function Menclothing() {

	const {menclothing, setMenclothing} = useBetween(useShareableState);


	return (
		<div>
				 <h1>Men's Clothing</h1>

<Grid container spacing={1} style={{paddingTop:"2rem"}}>

			{
			menclothing.map((link, i) => {

			var frame = <ItemCart 
			title = {menclothing[i].title}
			description = {menclothing[i].description}
			image = {menclothing[i].image}
			price = {menclothing[i].price}
			rating = {menclothing[i].rating?.rate}
			id = {menclothing[i]}
			  
			  />
			return frame;
		})
	  }
		{menclothing.frame}

</Grid>
		</div>

	
	)
}
