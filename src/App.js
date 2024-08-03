import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import React from 'react';
// index.js o App.js
import '@fortawesome/fontawesome-free/css/all.min.css';

import * as ReactDOM from 'react-dom';

function App() {
  return (
    <div>
    <Header />
    <Body />
    <Footer />
  </div>
  );
}

export default App;
