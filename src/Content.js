import React, { Component } from 'react';
import './css/App.css';
import foto1 from './img/foto1.png';
import foto2 from './img/foto2.png';
import foto3 from './img/foto3.png';
import foto4 from './img/foto4.png';
import foto5 from './img/foto5.png';
import foto6 from './img/foto6.png';
import foto7 from './img/foto7.png';
import foto8 from './img/foto8.png';

class Content extends Component {
    render() {
        return (
            <div>
                <div className="centro">
                    <img src={foto1} />
                    <h1>El Centro</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consecttur adipiscing elit, sed do eiusmod</p>
                </div>
                <div className="imagenesTres">
                    <img src={foto2} />
                    <img src={foto3} />
                    <img src={foto4} />
                </div>
                <div className="imagenesCuatro">
                    <h1>Trámites e información</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consecttur adipiscing elit, sed do eiusmod</p>
                    <img src={foto5} />
                    <img src={foto6} />
                    <img src={foto8} />
                    <img src={foto7} />
                </div>
            </div>
        );
    }
}

export default Content;