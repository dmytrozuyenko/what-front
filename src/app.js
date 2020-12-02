import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from './store.js';
import { Routes } from './features/index.js';
import Icon from './icon.js';

const store = configureStore();

export const App = () => (
  <Provider store={store}>
    <Router>
      <h1>Hello, I`m App Component!</h1>
      <Icon icon="Plus" size={32} className="icon" color="#FFB800" />
      <Icon icon="Edit" viewBox="0 0 50 50" color="#FFB800" />
      <Routes />
    </Router>
  </Provider>
);
