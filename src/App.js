import React, { Component } from 'react';

import './css/App.css';
import Header from './Header';
import Footer from './Footer';
import Title from './Title';
import Menu from './Menu';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <Menu />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
