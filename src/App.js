import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aksessuar from './components/Aksessuar/Aksessuar';
import BlackDiv from './components/BlackDiv/blackdiv';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/header';
import Medium from './components/Medium/Medium';

import Navbar from './components/Navbar/navbar';
import Subscribe from './components/Subscribe/Subscribe';

const App = () => {
  return ( 
   <div>
      <div className='container'>
        <Header/>
        <Medium />
        <BlackDiv />
        <Aksessuar />
        <Gallery />
        <Subscribe />
        <Footer />
          {/* <BrowserRouter>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/service' element={<Ourservice />} />
            </Routes>
          </BrowserRouter> */}
      </div>
   </div>
   );
}
 
export default App;