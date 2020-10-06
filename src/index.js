import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter, Route } from 'react-router-dom';
import RootRedux from './components/root.redux';

ReactDOM.render(
  <RootRedux>
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  </RootRedux>,
  document.querySelector('#root')
);
