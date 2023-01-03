import React from 'react';
import './header.css';
import Navbar from '../Navbar/navbar';
import brend1 from '../Header/img/Brend1.png';

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <div className='headerBottom'>
                <div className="markaz">
                    <h1>Долго, дорого, богато!</h1>
                    <button>каталог изделий </button>
                </div>
                <div className="Brends cont">
                    <img src={brend1} />
                    <div className="line"></div>
                    <img src={brend1} />
                    <div className="line"></div>
                    <img src={brend1} />
                    <div className="line"></div>
                    <img src={brend1} />
                    <div className="line"></div>
                    <img src={brend1} />
                    <div className="line"></div>
                    <img src={brend1} />
                </div>
            </div>
        </div>
    );
}

export default Header;