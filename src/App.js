import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import { Container } from './Container';
import { Footer } from './Footer';
import './App.css';

function App() {

  return (
    <React.Fragment>
      <Header />
        <Container />
      <Footer />
    </React.Fragment>
  );
}

export default App;
