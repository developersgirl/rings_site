import React from 'react';
import './contact_p.css';
import lokatsiya from '../../components/Contact_p/img/gridicons_location.png';
import telefon from '../Contact_p/img/carbon_phone.png';
import xat from '../Contact_p/img/xat.png';

const Contact_p = () => {
    return (
        <div className="Asosiy_contact ">
                <p>Главная  /  Контакты</p>
                <h1>Контакты</h1>
                <div className="header_side cont">
                    <div className="aloqa">
                        <h1>Главный офис</h1>
                        <p> <img src={lokatsiya}  /> Невский 140, офис 1-5</p>
                        <p>Невский 140, офис 1-5</p>
                    </div>
                    <div className="aloqa">
                        <h1>Телефоны</h1>
                        <p> <img src={telefon}  /> 8 (812) 458-56-45</p>
                        <p>8-911-878-00-00</p>
                    </div>
                    <div className="aloqa">
                        <h1>E-mail</h1>
                        <p> <img src={xat}  /> office@ojjo.com</p>
                        <p>sales@ojjo.com</p>
                    </div>
                    <div className="aloqa">
                        <h1>Главный офис</h1>
                        <p> <img src={lokatsiya}  /> Невский 142, офис 1-5</p>
                        <p>Загородный 145, офис 11-15</p>
                    </div>
                </div>
        </div>
    );
}

export default Contact_p;