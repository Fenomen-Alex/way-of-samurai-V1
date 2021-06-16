import React from 'react';
import Preloader from '../Common/Preloader/preloader';

const withSuspense = (Component) => {
  return (props) => {
    return <React.Suspense fallback={<Preloader />} >
      <Component {...props} />
    </React.Suspense>
  };
};

export default withSuspense;
