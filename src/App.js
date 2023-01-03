import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BrendRing from '../src/Container/BrendRing/Brend';
import ONEbrend from '../src/Container/ONEbrend/onebrend';
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
          <Route path='/ONEbrend' element={<ONEbrend />} />
          <Route path='/ONEbrend' element={<ONEbrend />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;