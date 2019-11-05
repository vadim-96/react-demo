import React from 'react';

import './Spinner.css';

const Spinner = () => (
  <div className="lds-css ng-scope">
    <div style={{ width: '100%', height: '100%' }} className="lds-double-ring">
      <div />
      <div />
    </div>
  </div>
);

export default Spinner;
