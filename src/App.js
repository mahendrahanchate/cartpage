import { useDeferredValue, useEffect, useTransition} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Cart from './Components/Cart';
import Main from './Components/Main';
import data from './data';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import Admin from './Components/Admin';
import BuyNow from './Components/BuyNow';
import PlaceOrder from './Components/PlaceOrder';
import ConfirmOrder from './Components/ConfirmOrder';
import AdminAdmin from './Components/AdminAdmin';
import AdminUsers from './Components/AdminUsers';
import AdminBalAmount from './Components/AdminBalAmount';
import AdminCart from './Components/AdminCart';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const { products } = data;
  const onAdd = (product) => {
    const exist = cartItems.find((X) => X.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
      x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));

    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));

    } else {
        const newCartItems = cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        );
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));

    }
  };

  const [isPending, startTransition] = useTransition();


  useEffect(() => {
    startTransition(() => {
      setCartItems(
        localStorage.getItem('cartItems') 
          ? JSON.parse(localStorage.getItem('cartItems'))
          : []
      );
    });
  }, []);

  const cartItemsCount = useDeferredValue(cartItems.length);

  return isPending ? (
    <div>Loading...</div>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Header countCartItems={cartItemsCount}/>
              <div className='row'>
                <Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products} />
                <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
              </div>
            </div>
          }
        />
        {/* Add more routes here if needed */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/buynow' element={<BuyNow />} />
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='confirmorder' element={<ConfirmOrder/>}/>

        <Route path='/admincart' element={<AdminCart/>}/>
        <Route path='/adminbalamount' element={<AdminBalAmount/>}/>
        <Route path='/adminusers' element={<AdminUsers/>}/>
        <Route path='/adminadmin' element={<AdminAdmin/>}/>

        {/* The '/' path should only be declared once and without the 'exact' prop */}
        <Route path='/' element={<Cart />} />
      </Routes>
    </BrowserRouter>        
  );
}

export default App;
