import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom'
import NewCar from './pages/NewCar';
import Home from './pages/Home';



function App() {

  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/cars/')
      .then(res => res.json())
      .then(cars => setCars(cars))
  }, [])
  
  console.log(cars)

  const addCar = (car) => {
    setCars([...cars, car])
  }

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Main car={cars} />} />
        <Route path="/newCar" element={<NewCar addCar={addCar} />} />
        <Route path='/cars/:id' element={<ShowCar car={cars} />} />
      </Routes>
    </div>
  );
}
export default App;
