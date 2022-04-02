
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
      </Routes>
       
       
       
    </div>
  );
}

export default App;
