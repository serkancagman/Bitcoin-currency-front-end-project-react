import React from 'react';
import loaderImg from "../../images/btcLoader.png"
import "./style/preloader.css"
const PreLoader = () => {
  return <div id='preLoader'>
      <img src={loaderImg} alt="..." className='loaderImage' />
  </div>;
};

export default PreLoader;
