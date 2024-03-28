import React from 'react';
import { useRouteError } from 'react-router-dom';

import classes from './Error.module.scss';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
  const error = useRouteError();

  let message = '';

  if (error.status === 404) {
    message = 'Resource was not found';
  }

  console.log(error);

  return (
    <>
      <Navbar hideSections={true} />
      <div className={classes.error}>
        <p>{message}</p>
      </div>
    </>
  );
};

export default ErrorPage;
