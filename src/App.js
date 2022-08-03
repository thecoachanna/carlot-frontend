import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom'
import ShowCar from './pages/ShowCar'
import NewCar from './pages/NewCar';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Auth from './pages/AuthPage/Auth';
import axios from 'axios';
import setAuthToken from './utils/axios'



function App() {

  const [ cars, setCars  ] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {

    setAuthToken()
    axios.get('http://localhost:4000/cars/').
    then((res) => setCars(res.data))

  }, [])

 
  
  console.log(cars)

  const addCar = (car) => {
    setCars([...cars, car])
 }

  return (
    <div className="App">
      <Navbar user={user}/>
      <Routes>
        <Route path='/' element = { <Home cars={cars} setCars={setCars} />} />
        <Route path="/newCar" element={ <NewCar addCar={addCar} />} />
        <Route path='/cars/:id' element={ <ShowCar cars={cars} />} />
        <Route path='/login' element={<Auth setUser={setUser} page="login"/>}/>
        <Route path='/signup' element={<Auth setUser={setUser} page="signup"/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
