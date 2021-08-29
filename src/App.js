
import './App.css';

import React, {useEffect} from 'react'
import Axios from 'axios'

import { useBetween } from 'use-between';
import useShareableState from "./useShareableState";

// Router ======================
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"

// Components =================
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Jewelery from './pages/Jewelery';
import Appbar from './Layout/Appbar';
import Cart from './pages/Cart';
import Electronics from './pages/Electronics';
import Menclothing from './pages/Menclothing';
import Womenclothing from './pages/Womenclothing';

function App() {


  //  Fetching Jewelery Data =========================================

  const {jewelery, setJewelery} = useBetween(useShareableState);

	const fetchDetails = async () => {
		const {data} = await Axios.get("https://fakestoreapi.com/products/category/jewelery?limit=5");
		console.log("jewelery Response: ", data);
			
		const jewelery =  data;
		setJewelery(jewelery);

	}


	


    //  Fetching Jewelery Data =========================================

    const {electronics, setElectronics} = useBetween(useShareableState);

    const fetchElectronicsDetails = async () => {
      const {data} = await Axios.get("https://fakestoreapi.com/products/category/electronics?limit=5");
      // console.log("electronics Response: ", data);
        
      const electronics =  data;
      setElectronics(electronics);
    }


    //  Fetching men's clothing Data =========================================

    const {menclothing, setMenclothing} = useBetween(useShareableState);

    const fetchMenclothingDetails = async () => {
      const {data} = await Axios.get("https://fakestoreapi.com/products/category/men's clothing?limit=5");
      // console.log("electronics Response: ", data);
        
      const menclothing =  data;
      setMenclothing(menclothing);
    }

    //  Fetching men's clothing Data =========================================

    const {womenclothing, setWomenclothing} = useBetween(useShareableState);

    const fetchWomenclothingDetails = async () => {
      const {data} = await Axios.get("https://fakestoreapi.com/products/category/women's clothing?limit=5");
      // console.log("electronics Response: ", data);
        
      const womenclothing =  data;
      setWomenclothing(womenclothing);
    }

	useEffect(() => {
		fetchDetails();
		fetchElectronicsDetails();
		fetchMenclothingDetails();
		fetchWomenclothingDetails();
	}, [])



  return (
    <Router>
    <div className="App">

    <Appbar />

    </div>

    <Switch>
      <Route path = "/cart" component = {Cart} />
      <Route path = "/womenclothing" component = {Womenclothing} />
      <Route path = "/menclothing" component = {Menclothing} />
      <Route path = "/electronics" component = {Electronics} />
      <Route path = "/jewelery" component = {Jewelery} />
      <Route path = "/" component = {Home} />
    </Switch>

    </Router>
  );

  }
export default App;
