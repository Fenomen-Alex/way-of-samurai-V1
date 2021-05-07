import React from 'react';
import loader from '../../../assets/images/icon-ajax-loading-spinner.svg';

const Preloader = () => {
  return (
    <div>
      <img src={loader} alt="loading..." />
    </div>
  );
};

export default Preloader;
