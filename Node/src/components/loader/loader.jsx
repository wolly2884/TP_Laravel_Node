// src/components/Loader.js
import React from 'react';
import './Loader.css';
import Topo from '../topo/Topo';
import Rodape from '../rodape/Rodape';

const Loader = () => {
  return (
    <div className='main-loader' >
        <div className='topo-loader'>
          <Topo />
        </div>
        <div className="loader"></div>
        <div className='Rodape-loader'>
          <Rodape />
        </div>
    </div>
  );
};

export default Loader;
