import React from "react";
import './Header.scss';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="Nav">
            <ul className="Nav__list">
                <li className="Nav__item">
                    <NavLink className="Nav__link" exact to="/">Home</NavLink>
                </li>
                <li className="Nav__item Nav__item--right">
                    <NavLink className="Nav__link Nav__link--sign" exact to="/sign-in">Sign In</NavLink>
                    <NavLink className="Nav__link Nav__link--sign Nav__link--alt" exact to="/sign-up">Sign Up</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default function Header() {
    return(
        <header className="Header">
            <Nav />
        </header>
    );
}