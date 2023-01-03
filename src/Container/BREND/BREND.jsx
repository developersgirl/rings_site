import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import BREND_Header from '../../components/BREND_Header/brend_header';
import Product_Card from '../../components/Product_Card/ProductCard';
import Product_Card2 from '../../components/Product_Card2/brendh';
import Footer from '../../components/Footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';
import './BREND.css';
import Lorem_ipsum from '../../components/Lorem_ipsum/lorem';

const BREND = () => {
    return ( 
        <div className="BREND">
            <Navbar />
            <BREND_Header />
            <Product_Card />
            <Product_Card2 />
            <Lorem_ipsum />
            <Subscribe />
            <Footer />
        </div>
     );
}
 
export default BREND;