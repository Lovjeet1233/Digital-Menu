// Navbar.js
import React from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function Navbar() {
    const cartstate = useSelector(state => state.cartReducer)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">OrderEase</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link active" href="#" style={{ fontSize: '1.5em' }}>Login </a>

                        <a className="nav-item nav-link" href="/cart" style={{ fontSize: '1.5em' }}>Cart {cartstate.cartItems.length}</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
