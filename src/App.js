import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom'
import ShowCar from './pages/showCar/ShowCar'
import NewCar from './pages/NewCar';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Login from './pages/Login';



function App() {

  const [ cars, setCars  ] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    fetch('http://localhost:4000/cars/')
    .then( res => res.json())
    .then( cars => setCars(cars))
  }, [])
  
  console.log(cars)

  const addCar = (car) => {
    setCars([...cars, car])
 }

  return (
    <div className="App">
      <Navbar user={user}/>
      <Routes>
        <Route path='/cars' element = { <Home cars={cars} setCars={setCars} />} />
        <Route path="/cars/new" element={ <NewCar addCar={addCar} />} />
        <Route path='/cars/:id' element={ <ShowCar cars={cars} />} />
        <Route path='/login' element={<Login setUser={setUser}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
