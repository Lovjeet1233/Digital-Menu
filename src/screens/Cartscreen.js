import React from 'react'
import {useSelector, useDispatch} from 'react-redux' 
export default function Cartscreen() {
const cartstate = useSelector(state=>state.cartReducer) 
const cartItems = cartstate.cartItems
return ( 
<div>
<div className="row justify-content-center">
<div className="col-md-6">
<h2 style={{fontSize: '40px'}}>My Cart</h2>
</div>
<div className="col-md-4"> 
</div>
</div>
</div>
)
}