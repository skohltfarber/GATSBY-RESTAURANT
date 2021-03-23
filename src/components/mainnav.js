import React from "react";
import { Link } from "gatsby";

export default function HeaderNav() {

    return (
        <>
            <ul className="menu">
                <li className="menu"><Link to="/">Home</Link></li>
                <li className="menu"><Link to="/about">About</Link></li>
                <li className="menu"><Link to="/cart">Shopping Cart</Link></li>
                <li className="menu"><Link to="/contact">Contact Us</Link></li>
            </ul>
        </>
    );

}