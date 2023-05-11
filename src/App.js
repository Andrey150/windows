import React from "react";
import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout/layout.jsx'
import './app.scss'
import MainPage from "./components/mainPage/main-page.jsx";
import Faq from "./components/faq/faq.jsx";
import Promotions from "./components/promotions/promotions.jsx";
import Advantages from "./components/advantages/advantages.jsx";
import Product from "./components/product/product.jsx";
import Reviews from "./components/reviews/reviews.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/promotions' element={<Promotions/>}/>
          <Route path='/advantages' element={<Advantages/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
