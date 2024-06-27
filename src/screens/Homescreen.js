//Homescreen.js
import React ,{useState} from 'react'

import Pizza from '../components/Pizza'
import pizzas from '../pizzasdata'
import { useEffect } from 'react'
export default function Homescreen() {
  return (
    <div>
    <div className="row">
      {pizzas.map(pizza=>{
        return <div className="col-md-4" key={pizza._id}>
          <div >
          <Pizza pizza ={pizza}/>
          </div>
          </div>
      })}
    </div>
    </div>
        )}