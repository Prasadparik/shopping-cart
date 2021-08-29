import React  from 'react'
import ItemCart from '../components/ItemCard'


import Grid from '@material-ui/core/Grid';


import { useBetween } from 'use-between';
import useShareableState from "../useShareableState";

export default function Womenclothing() {

	const {womenclothing, setWomenclothing} = useBetween(useShareableState);


	return (
		<div>
				 <h1>Women Clothing</h1>

<Grid container spacing={1} style={{paddingTop:"2rem"}}>

			{
			womenclothing.map((link, i) => {

			var frame = <ItemCart 
			title = {womenclothing[i].title}
			description = {womenclothing[i].description}
			image = {womenclothing[i].image}
			price = {womenclothing[i].price}
			rating = {womenclothing[i].rating?.rate}
			id = {womenclothing[i]}
			  
			  />
			return frame;
		})
	  }
		{womenclothing.frame}

</Grid>
		</div>

	
	)
}
