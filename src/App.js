import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './Components/Hero/indexhero';
import Products from './Components/Products/index';
import { productData, productDataTwo } from './Components/Products/data';
import Feature from './Components/Feature';
import Footer from './Components/Footer';

const App =() =>{
  return (
    <Router>
      <GlobalStyle/>
      <Hero />
      <Products heading='Choose Your Favourite' data={productData}/>
      <Feature />
      <Products heading='Sweet Treats For You' data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
