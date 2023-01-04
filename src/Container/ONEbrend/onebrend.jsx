import React from 'react';
import Asosiy from '../../components/Asosiy/glavniy';
import Navbar from '../../components/Navbar/navbar';
import Lorem_ipsum from '../../components/Lorem_ipsum/lorem';
import Product_Card from '../../components/Product_Card/ProductCard';
import Subscribe from '../../components/Subscribe/Subscribe';
import Footer from '../../components/Footer/Footer';
import Tovar from '../../components/Tovar/tovar';

const Onebrend = () => {
    return ( 
        <div className="onebrend">
            <Navbar />
            <Asosiy />
            <Lorem_ipsum />
            <Tovar />
            <Product_Card />
            <Subscribe />
            <Footer />
        </div>
     );
}
 
export default Onebrend;