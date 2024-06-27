import React, { useState } from 'react';
import { addToCart } from './../actions/cartActions';
import { UseDispatch, useDispatch } from 'react-redux';
import { UseSelector } from 'react-redux';

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(pizza.variants[0]);
  const dispatch = useDispatch()
  function addToCart(){
dispatch(addToCart(pizza, quantity,variant))
  }
  return (
    <div className="pizza-card shadow-lg p-3 mb-5 bg-white rounded">
      <h1>{pizza.name}</h1>
      <img src={pizza.image} className='img-fluid' style={{ height: '200px', width: '200px' }} alt={pizza.name} />
      <div className='flex-container mb-3'>
        <div className='w-100 mr-2'>
          <p>Variants</p>
          <select className="form-select" value={variant} onChange={(e) => setVariant(e.target.value)}>
            {pizza.variants.map((variant, index) => (
              <option key={index} value={variant}>{variant}</option>
            ))}
          </select>
        </div>
        <div className='w-100'>
          <p>Quantity</p>
          <select className="form-select" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {[...Array(10).keys()].map((x, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>
      <div className='flex-container'>
        <div>
          <h1>Price: {pizza.prices[variant] * quantity}</h1>
        </div>
        <div>
          <button className="btn btn-primary" onClick={addToCart}>Add To Cart</button>
        </div>
      </div>     
    </div>
  );
}
