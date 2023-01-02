import React from 'react';
import './navbar.css';
import logo from '../Navbar/img/logo (3).png';
import vectorr from '../Navbar/img/Vector (17).png';
import account from '../Navbar/img/account.png';
import like from '../Navbar/img/like.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="NAVBAR">
            <div className="navbar">
                <div className="left">
                    <Link to='/'>Контрагентам</Link>
                    <Link to='/ONEbrend'>Дизайнерам</Link>
                    <Link to='/BrendContact'>Вакансии</Link>
                    <Link to='/BREND'>BREND</Link>
                </div>
                <div className="center">
                    <img src={logo} />
                </div>
                <div className="right">
                    <img src={vectorr} />
                    <a className='search' href="#">Поиск</a>
                    <a href="#">Вход/Регистрация</a>
                    <img src={account} />
                    <img src={like} />
                </div>
            </div>
        </div>

    );
}

export default Navbar;