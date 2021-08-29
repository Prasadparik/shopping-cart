import React from 'react'

// Router ======================
import {Link} from "react-router-dom"

// Material UI
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export default function Appbar() {
	return (
		<div>
	<AppBar position="static" color="default">
        <Toolbar>

          <Typography variant="h6" >
		  <Link to="/" className="navLink">Home</Link>
          </Typography>

          <Typography variant="h6" >
		  <Link to="/jewelery" className="navLink">Jewelery</Link>
          </Typography>

          <Typography variant="h6" >
		  <Link to="/electronics" className="navLink">Electronics</Link>
          </Typography>

          <Typography variant="h6" >
		  <Link to="/menclothing" className="navLink">Men's clothing</Link>
          </Typography>

          <Typography variant="h6" >
		  <Link to="/womenclothing" className="navLink">Women's clothing</Link>
          </Typography>



		  <IconButton   color="inherit" aria-label="menu">
		  <Link to="/cart" className="navLink"><ShoppingCartIcon /></Link>
          </IconButton>
        </Toolbar>
    </AppBar>
		</div>
	)
}
