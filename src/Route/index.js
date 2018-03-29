import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Template } from '../container';
import Main from './Main';

const Route = () => (
  <BrowserRouter>
    <Template>
      <Main />
    </Template>
  </BrowserRouter>
);

export default Route;
