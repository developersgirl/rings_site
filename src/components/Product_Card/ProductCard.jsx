import React from 'react';
import './ProductCard.css';
import redring from '../Product_Card/img/redrings.png';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <div className="productcard cont">
            <div className="product-card">
                <Link to='/ONEbrend'> <img src={redring} /> </Link>
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
        </div>
    );
}

export default ProductCard;

