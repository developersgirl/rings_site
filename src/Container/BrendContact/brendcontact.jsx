import React from 'react';
import Contact_p from '../../components/Contact_p/contact_p';
import Navbar from '../../components/Navbar/navbar';
import Xarita from '../../components/Xarita/xarita';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
    return ( 
        <div className="contact">
            <Navbar />
            <Contact_p />
            <Xarita />
            <Footer />
        </div>
     );
}
 
export default Contact;