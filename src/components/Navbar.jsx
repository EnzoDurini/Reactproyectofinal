import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Categories from './Categories';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">Mugiwara´s shop</Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Categories/>
                    </ul>
                    <div>
                    <Link to="/cart" className="btn"><CartWidget/></Link>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar