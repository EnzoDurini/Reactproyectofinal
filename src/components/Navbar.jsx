import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Categories from './Categories';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">Mugiwara´s shop</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <Categories/>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">About us</Link>
                        </li>
                    </ul>
                    <div>
                    <Link to="/cart" className="btn btn-outline-success"><CartWidget numero={4}/></Link>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar