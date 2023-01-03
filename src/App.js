import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BREND from './Container/BREND/BREND';
import BrendRing from '../src/Container/BrendRing/Brend';
import ONEbrend from '../src/Container/ONEbrend/onebrend';
import BrendContact from '../src/Container/BrendContact/brendcontact';
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
    <div className='container'>
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<BrendRing />} />
          <Route path='/ONEbrend' element={<ONEbrend />} />
          <Route path='/BREND' element={<BREND />} />
          <Route path='/BrendContact' element={<BrendContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;