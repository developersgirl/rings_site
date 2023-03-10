import React from 'react';
import './Footer.css';
import visa from '../Footer/img/visa.png';
import bx_youtube from '../Footer/img/bx_youtube.png';
import bx_vk from '../Footer/img/social_vk.png';
import bx_facebook from '../Footer/img/bx_facebook.png';
import bx_telegram from '../Footer/img/bx_telegram.png';
import bx_etsy from '../Footer/img/bx_etsy.png';
import mastercard from '../Footer/img/master.png';
import tel from '../Footer/img/phone.png';
import email from '../Footer/img/mail.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer cont">
            <div className="footer_column1">
                <h1>Полезные ссылки</h1>
                <hr />
                <a href="#">Доставка</a> <br />
                <a href="#">Оплата</a> <br />
                <a href="#">Акции</a> <br />
                <a href="#">Политика конфиденциальности</a>
            </div>
            <div className="footer_column2">
                <h1>оплата</h1>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                <div className="visa_img">
                    <img src={visa} />
                    <img src={mastercard} />
                </div>
            </div>
            <div className="footer_column3">
                <Link to='/BrendContact'><h1>контакты</h1></Link>
                <hr />
                <div className="tel_number">
                    <div className="number">
                        <img src={tel} />
                        <number>8 (812) 234-56-55</number>
                    </div> <br />
                    <div className="number">
                        <img src={tel} />
                        <number>8 (812) 234-56-55</number>
                    </div> <br />
                    <div className="number">
                        <img src={email} />
                        <number>ojjo@ojjo.ru</number>
                    </div>
                </div>
            </div>
            <div className="footer_column4">
                <h1>социальные сети</h1>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                <div className="carbon">
                    <img src={bx_youtube} />
                    <img src={bx_vk} />
                    <img src={bx_facebook} />
                    <img src={bx_telegram} />
                    <img src={bx_etsy} />
                </div>
            </div>
        </div>
    );
}

export default Footer;