import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import gitlogo from './git-logo.png';
import "./Navigation.css";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <img src={gitlogo} className="photo img-thumbnail" />
                    </li>
                    <li class="nav-item active">
                        <a className="nav-link" href="#">GitHub Issue Browser</a>
                    </li>
                    <li>
                        <img src={logo} className="App-logo photo" alt="logo" />
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;