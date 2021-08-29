import React from 'react'
import CategoryCard from '../components/CategoryCard'

import Grid from '@material-ui/core/Grid';



export default function Home() {
	return (
		<div>
			<h1>Home</h1>

			<Grid container spacing={1} style={{paddingTop:"2rem"}}>

			<CategoryCard 	
			title = "Jewelery"
			path = "/jewelery"
			image = "https://stylesatlife.com/wp-content/uploads/2016/11/Heavy-Expensive-Diamond-Necklaces.jpg"
			/>
		

			<CategoryCard 	
			title = "Men's Cloating"
			path = "/menclothing"
			image = "https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?k=20&m=887360960&s=612x612&w=0&h=N0k2yX9noV6kNgpmKbcSXaLOl2x8Mbt_lyppAmfhNcA="
			/>


		
			<CategoryCard 	
			title = "Electronics"
			path = "/electronics"
			image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvwlxJtoK88ho0gH4iwIgJIUAfr6BIxNsUsCsXeYexPAQeERHrtAfhsCWMepSyIWZ328&usqp=CAU"
			/>


		
			<CategoryCard 	
			title = "Women Clothing"
			path = "/womenclothing"
			image = "https://cdn.vox-cdn.com/thumbor/QgEMwYKlcK9fSFsZD2FIe9SouxM=/0x0:4915x3930/1200x800/filters:focal(1719x1156:2505x1942)/cdn.vox-cdn.com/uploads/chorus_image/image/61753005/clothingrack.0.jpg"
			/>
			
		</Grid>
		</div>
	)
}
