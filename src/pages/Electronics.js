import React, {useState, useEffect} from 'react'
import ItemCart from '../components/ItemCard'
import Axios from 'axios'

import Grid from '@material-ui/core/Grid';


import { useBetween } from 'use-between';
import useShareableState from "../useShareableState";

export default function Electronics() {

	const {electronics, setElectronics} = useBetween(useShareableState);


	return (
		<div>
				 <h1>Electronics</h1>

<Grid container spacing={1} style={{paddingTop:"2rem"}}>

			{
			electronics.map((link, i) => {

			var frame = <ItemCart 
			title = {electronics[i].title}
			description = {electronics[i].description}
			image = {electronics[i].image}
			price = {electronics[i].price}
			rating = {electronics[i].rating?.rate}
			id = {electronics[i]}
			  
			  />
			return frame;
		})
	  }
		{electronics.frame}

</Grid>
		</div>

	
	)
}
