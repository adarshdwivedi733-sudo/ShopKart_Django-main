import React from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom"

import NavBar from "./components/NavBar.jsx"
import Fotter from './components/Fotter.jsx'

import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Admin from './pages/Admin.jsx'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:categoryId" element={<Products/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
        <Fotter/>
      </BrowserRouter>
    </div>
  )
}
