import React from 'react';
import './lorem.css';
import car from '../Lorem_ipsum/img/car.png';
import loremside from '../Lorem_ipsum/img/seo-text.png';
import list from '../Lorem_ipsum/img/list.png';
import design from '../Lorem_ipsum/img/ribbon-design.png';
import jevelry from '../Lorem_ipsum/img/jewelry.png';


const Lorem_ipsum = () => {
    return (
        <div className="Lorem contain">
            <div className="lorem_text">
                <img src={loremside} />
            </div>
            <div className="delivery_side">
                <div className="delivery">
                    <img src={car} />
                    <p>Бесплатная <br /> доставка</p>
                </div>
                <div className="delivery">
                    <img src={list} />
                    <p>Индивидуальный <br /> дизайн</p>
                </div>
                <div className="delivery">
                    <img src={design} />
                    <p>Бесплатная <br /> примерка</p>
                </div>
                <div className="delivery">
                    <img src={jevelry} />
                    <p>Личный <br /> подход</p>
                </div>
            </div>
        </div>
    );
}

export default Lorem_ipsum;