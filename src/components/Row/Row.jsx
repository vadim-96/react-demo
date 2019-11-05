import React from 'react';
import PropTypes from 'prop-types';

import './Row.css';

const Row = ({ left, right }) => (
  <div className="row mb2">
    <div className="col-md-6">
      {left}
    </div>
    <div className="col-md-6">
      {right}
    </div>
  </div>
);

Row.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};

export default Row;
