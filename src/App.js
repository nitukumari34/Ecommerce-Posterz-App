import { useEffect } from "react";
import {Route,Routes} from 'react-router-dom'
// import Category from './components/category/Category';
import Categories from './pages/categories/Categories';
import Home from './pages/home/Home';
import ProductDetail from './pages/productDetail/ProductDetail';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { useDispatch } from 'react-redux'
import { fetchCategories } from "./redux/categorySlice";
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])
  return (
    <div className="App">
      <Navbar/>
      <main>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category/:categoryId?' element={<Categories/>}/>
      <Route path='/products/:productId' element={<ProductDetail/>}/>

      
     </Routes>
     </main>
     <Footer/>
    </div>
  );
}

export default App;
