import React, { Component } from 'react';
import './css/App.css';
import logo from './img/logo.png';
import social from './img/social.png';


class Title extends Component {
    render() {
        return (
            <div>
                <img className="logo" src={logo}></img>
                <img className="social" src={social}></img>
            </div>
        );
    }
}

export default Title;