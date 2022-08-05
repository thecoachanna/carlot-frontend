import './App.css';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom'
import ShowCar from './pages/showCar/ShowCar'
import NewCar from './pages/NewCar';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Auth from './pages/AuthPage/Auth';


function App() {

  const [ cars, setCars  ] = useState([])
  const [user, setUser] = useState()

  const addCar = (car) => {
    setCars([...cars, car])
 }

  return (
    <div className="App">
      <Navbar user={user}/>
      <Routes>
        <Route path='/cars' element = { <Home cars={cars} setCars={setCars} />} />
        <Route path="/cars/new" element={ <NewCar addCar={addCar} />} />
        <Route path='/cars/:id' element={ <ShowCar cars={cars} user={user} />} />
        <Route path='/login' element={<Auth setUser={setUser} page="login"/>}/>
        <Route path='/signup' element={<Auth setUser={setUser} page="signup"/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
