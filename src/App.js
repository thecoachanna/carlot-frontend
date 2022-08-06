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
  const [searchQuery,setSearchQuery] =useState("")

  function getSearchQuery(){
    return searchQuery
  }

  const addCar = (car) => {
    setCars([...cars, car])
 }

  return (
    <div className="App">
      <Navbar user={user} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setCars={setCars}/>
      <Routes>

        <Route path='/cars' element = { <Home getSearchQuery={getSearchQuery} cars={cars} setCars={setCars} />} />
        <Route path="/cars/new" element={ <NewCar addCar={addCar} setCars={setCars} edit={false} />} />
        <Route path="/cars/:id/edit" element={ <NewCar addCar={addCar} setCars={setCars} edit={true}/>} />
        <Route path='/cars/:id' element={<ShowCar addCar={addCar} cars={cars} />} />
        <Route path='/login' element={<Auth setUser={setUser} page="login"/>}/>
        <Route path='/signup' element={<Auth setUser={setUser} page="signup"/>}/>
        <Route path="*" element={<Home cars={cars} getSearchQuery={getSearchQuery} setCars={setCars}/>} />
       

      </Routes>
      
    </div>
  );
}

export default App;
