import React from 'react'

// Router ======================
import {Link} from "react-router-dom"

import {Paper} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


export default function CartItemCard(props) {



	return (
		<div>
	 <Paper style={{padding: "1rem"}} >
	<Grid container spacing={1}>

        <Grid item xs={3}>
          <img className="cart-item-img" src={props.image} />
        </Grid>
		
        <Grid item xs={7}>
        <h3>{props.title}</h3>
		<h5>$ {props.price}</h5>
        </Grid>

        <Grid item xs={1}>
		<Link to="/cart">
		</Link>
        </Grid>
		
    </Grid>
	</Paper>
		</div>
	)
}
