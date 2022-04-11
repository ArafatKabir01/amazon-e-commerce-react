

import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import RequireAuth from './components/RequerAuth/RequerAuth';
import Shop from './components/Shop/Shop';
import SignUp from './components/signUp/SignUp';
import auth from './firebase.init';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/order' element={
              <RequireAuth>
                   <Order></Order>
              </RequireAuth>}>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
       
       
       
    </div>
  );
}

export default App;
