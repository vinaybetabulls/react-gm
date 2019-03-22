import React, { Component } from "react";
import logo from'./gm.png';
import Scrollchor from 'react-scrollchor';


export class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo"/>
                    </a>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <Scrollchor  className="nav-link" to="#home">Home</Scrollchor >
                            </li>
                            <li className="nav-item">
                                <Scrollchor  className="nav-link" to="#advantages">Our Advantage</Scrollchor >
                            </li>
                            <li className="nav-item">
                                <Scrollchor className="nav-link" to="#property">Property Search</Scrollchor>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Popular Properties</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Membership Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Register</a>
                            </li>
                        </ul>
                    </nav>


            </div>
                )
            }
}