import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos CSS
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';



function App() {


  return (
    <>   
      <MyNavbar/>
      {/*<Home/>*/}
      {/*<Register/>*/}
      <Login/>
      <Footer/>
    </>
  )
}

export default App
