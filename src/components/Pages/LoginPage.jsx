import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="jumbotron">
      <h3>Log in to see secret page!</h3>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  );
};

LoginPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
