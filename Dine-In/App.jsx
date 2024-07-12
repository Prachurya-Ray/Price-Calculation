import React from 'react';
import { CartProvider } from './CartContext';
import Body from './Body';
import Cart from './Cart';

const App = () => (
  <CartProvider>
    <div className="app">
      <Body />
      <Cart />
    </div>
  </CartProvider>
);

export default App;
