import React from 'react';
import Aksessuar from '../../components/Aksessuar/Aksessuar';
import BlackDiv from '../../components/BlackDiv/blackdiv';
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import Header from '../../components/Header/header';
import Medium from '../../components/Medium/Medium';
import Navbar from '../../components/Navbar/navbar';
import Subscribe from '../../components/Subscribe/Subscribe';



const Brend = () => {
    return (
        <div className="brend">
            <Header />
            <Medium />
            <BlackDiv />
            <Aksessuar />
            <Gallery />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default Brend;