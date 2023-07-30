import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.scss';

import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Laptops from './container/Laptops/Laptops';
import Monitors from './container/Monitors/Monitors';
import Phones from './container/Phones/Phones';
import Tablets from './container/Tablets/Tablets';

import laptopsData from './data/laptopsData';

function App() {
  const [dataState, setDataState] = useState(laptopsData);
  console.log(dataState);

  return (
    <div className="app">
      <Header />
      <main className='app__main'>
        <Routes>
          <Route path='/' element={<Laptops />} />
          <Route path='/monitors' element={<Monitors />} />
          <Route path='/phones' element={<Phones />} />
          <Route path='/tablets' element={<Tablets />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
