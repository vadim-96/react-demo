import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h3>Secret page!</h3>
      </div>
    );
  }

  return <Redirect to="/login" />;
};

SecretPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default SecretPage;
