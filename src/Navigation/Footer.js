import React from 'react';
import logo from './logo.svg';
import "./Navigation.css";

class Footer extends React.Component {
    render () {
        return (
            <div class="text-center">
                <img src={logo} className="App-logo logoSize" alt="logo" />
                <p className="text">React App by Nikoleta Koleva</p>
                <p className="text">03 March 2021</p>
            </div>
        );
    }
}

export default Footer;