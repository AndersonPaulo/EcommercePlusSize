import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">Moda Plus</Link>
        <div className="space-x-6 hidden md:flex">
          <Link to="/">Home</Link>
          <Link to="/produtos">Coleções</Link>
          <Link to="/produtos">Promoções</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/login">Intranet</Link>
        </div>
        <Link to="/carrinho" className="ml-4">🛒</Link>
      </div>
    </nav>
  );
}

export default Navbar
