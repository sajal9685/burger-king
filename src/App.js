// App.js
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './Bun/NavBar';
import Page from './Bun/page';
import Footer from './Bun/footer';

const App = () => {
  return (
    <div className="App">
        <Nav />
        <Page />
        <Footer />
      </div>
  );
};

export default App