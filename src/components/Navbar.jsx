import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Todos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products/conFruta">Con Fruta</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products/sinFruta">Sin Fruta</Link>
                        </li>
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