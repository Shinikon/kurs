import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer'

import Main from './pages/Main';
import Order from './pages/Order';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Banner />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/order" element={<Order />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;