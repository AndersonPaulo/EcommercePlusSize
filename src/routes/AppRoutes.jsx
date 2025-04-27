import {  Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Produtos from "../pages/Produtos"
import Carrinho from "../pages/Carrinho"
import Admin from "../pages/Admin"
import LoginAdmin from "../pages/Login"

export default function AppRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<LoginAdmin />} /> 
      </Routes>
  
  )
}