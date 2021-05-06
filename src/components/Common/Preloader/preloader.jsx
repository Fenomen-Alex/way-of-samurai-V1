import React from 'react';
import loader from '../../../assets/images/icon-ajax-loading-spinner.svg';

const Preloader = () => {
  return (
    <div>
      <img src={loader} />
    </div>
  );
};

export default Preloader;
