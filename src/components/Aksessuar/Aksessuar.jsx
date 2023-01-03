import React from 'react';
import './Aksessuar.css';
import button1 from '../Aksessuar/img/button1.png';

const Aksessuar = () => {
    return (
        <div className="aksessuar cont">
            <p>Полезные статьи</p>
            <h1>Лучшие советы по подбору дорогих подарков</h1>
            <div className="blog_item">
                <div className="akses1">
                    <a href="#">Как выбрать</a> <br />
                    <a href="#">часы для своей</a> <br />
                    <a href="#">будущей жены</a>
                </div>
                <div className="akses2">
                    <a href="#"> Запонки для мужа:</a> <br />
                    <a href="#">7 ключевых правил</a> <br />
                    <a href="#">покупки аксессуара</a>
                </div>
                <div className="akses3">
                    <a href="#">Как выбрать</a> <br />
                    <a href="#">часы для своей</a> <br />
                    <a href="#">будущей жены</a>
                </div>
            </div>
                <img src={button1} />
        </div>
    );
}

export default Aksessuar;