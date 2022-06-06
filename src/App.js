import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import Navbars from './component/Navbars/Navbars';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import SignUp from './component/Login/SignUp';
import Footer from './component/Footer/Footer';
import MoreFood from './component/MoreFood/MoreFood';
import FoodDtails from './component/FoodDtails/FoodDtails';
import Delivery from './component/DeliveryDetails/Delivery';
import "aos/dist/aos.css";
import AOS from "aos";
import { useState } from 'react';
import Cart from './component/Cart/Cart';
import RequireAuth from './component/Auth/RequireAuth';

function App() {
  AOS.init();

  const [food, setFood] = useState({})
  const [cart, setCart] = useState([]);

  const handleFood = (food) =>{
    setFood(food)
  }

  const handleCount = (id) => {
    let newCart = [];
    const exists = cart.find(product => product.id === id.id);
    const rest = cart.filter(product => product.id === id.id);

    if(exists){
        newCart = [id];
        alert('all redy exists');
        return newCart;
    }
    else if(rest){
        newCart = [...cart, id];
    }
    setCart(newCart);
  }

  const handleDelete = (p) => {
    let newCart = [];
    const addItem = cart.filter(product => product.id !== p.id)
    newCart = addItem
    setCart(newCart)
  }


  return (
    <div className="App">
      <Navbars food={food} count={cart}></Navbars>
      <Routes>
        <Route path='/' element={<Home handleCount={handleCount} handleFood={handleFood}></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='card' element={<Cart count={cart} handleDelete={handleDelete}></Cart>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path="/chosefood" element={
          <RequireAuth>
            <MoreFood handleFood={handleFood} handleCount={handleCount}></MoreFood>
          </RequireAuth>
        }></Route>
        <Route path="/fooddetail" element={<FoodDtails handleCount={handleCount} food={food}></FoodDtails>}></Route>
        <Route path='/delivery' element={<Delivery></Delivery>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
