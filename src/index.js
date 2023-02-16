import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBars from './components/navBar/NavBars';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ItemListContainers from './components/ItemListContainers';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import ItemList from './components/itemList/ItemList';
// import CategoryItemContainer from './components/CategoryItemContainer';
import Nosotros from './components/Nosotros';
import Footer from './components/Footer';
import CartProvider from './context/CartContext';
import CartList from './components/cart/CartList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <NavBars />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/nosotros' element={<Nosotros />} />
          <Route exact path='/product' element={<ItemListContainers />} />
          <Route exact path='/product/:productoId' element={<ItemDetailContainer />} />
          <Route exact path="/product/category/:categoryId" element={<ItemList/>}/>
          <Route exact path='/cartList' element={<CartList/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);


