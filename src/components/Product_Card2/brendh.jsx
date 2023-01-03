import React from 'react';
import redring from '../Product_Card/img/redrings.png';
import './brendh.css';

const Brendh = () => {
    return (
        <div className="Brendh cont">
            <div className="product-card">
                <img src={redring} />
                <p>Подвеска</p>
                <h1>Dolce & Gabanna</h1>
                <button>175 000 ₽</button>
            </div>
            <div className="product-card">
                <img src={redring} />
                <p>Подвеска</p>
                <h1>Dolce & Gabanna</h1>
                <button>175 000 ₽</button>
            </div>
            <div className="product-card">
                <img src={redring} />
                <p>Подвеска</p>
                <h1>Dolce & Gabanna</h1>
                <button>175 000 ₽</button>
            </div>
            <button>покажите еще</button>
        </div>
    );
}

export default Brendh;