
import React, {useState} from "react"


 const useShareableState = () => {
  const [ jewelery, setJewelery ] = useState([{}]);
  const [ electronics, setElectronics ] = useState([{}]);
  const [ menclothing, setMenclothing ] = useState([{}]);
  const [ womenclothing, setWomenclothing ] = useState([{}]);
  const [ cartItem , setCartItem ] = useState( [] );
  return {
  jewelery, 
  setJewelery,

  electronics, 
  setElectronics, 

  menclothing, 
  setMenclothing,

  womenclothing, 
  setWomenclothing,

	cartItem ,
	setCartItem 
  }
}

export default useShareableState;