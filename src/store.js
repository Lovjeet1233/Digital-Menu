import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducer } from './reducers/pizzaReducers';
import { cartReducer } from './reducers/cartReducers';
const finalReducer = combineReducers({
  getAllPizzasReducer,
  cartReducer
});
const cartItems = localStorage.getItem( 'cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
  cartReducer :{
    cartItems : cartItems
  }
};


const store = createStore(
  finalReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;