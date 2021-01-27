import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Categories from './components/storefront/categories';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Combine from './components/storefront/storefront';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
