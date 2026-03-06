import { Routes, Route } from 'react-router-dom';
import './App.css'

// Importing Navbar
import Navbar from './Components/Navbar'

// Importing Pages
import Home from './Pages/Home/Home';
import Products from './Pages/Product/Products';
import OrderPage from './Pages/Order/OrderPage';
import Wishlist from './Pages/Wishlist/Wishlist';
import ProductPage from './Pages/ProductPage/ProductPage';

// Importing Footer
import Footer from './Components/Footer';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import BottomNavbar from './Components/BottomNavbar';




function App() {


  return (
    <>

      <Navbar />
      <div className='pt-18'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/orders' element={<OrderPage />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </div>
      <Footer />

      <div className='md:hidden fixed bottom-0 left-0 w-full z-50'>
        <BottomNavbar />
      </div>
    </>
  )
}

export default App
