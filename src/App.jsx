
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import ProductPage from './Pages/ProductPage';
import OrderPage from './Pages/OrderPage';
import Footer from './Components/Footer';

function App() {


  return (
    <>

      <Navbar />
      <div className='pt-18'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<ProductPage />}></Route>
          <Route path='/orders' element={<OrderPage />}></Route>
        </Routes>
      </div>
      <Footer />

    </>
  )
}

export default App
