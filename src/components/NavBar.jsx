import { useState } from "react"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"

function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-primary">
          Moda Plus
          <Link to="/carrinho" className="ml-4">🛒</Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex flex-row gap-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><Link to="/produtos" className="hover:text-primary">Produtos</Link></li>
          <li><Link to="/contato" className="hover:text-primary">Contato</Link></li>
          <li><Link to="/login" className="hover:text-primary">Intranet</Link></li>
        </ul>

        {/* Botão hamburguer mobile */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
        >
          <Menu size={28} />
        </button>
      </nav>
      
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow p-4 space-y-3">
          < Link to="/" className="block hover:text-primary">Home</Link>
          < Link to="/produtos" className="block hover:text-primary">Produtos</Link>
          < Link to="/contato" className="block hover:text-primary">Contato</Link>
          < Link to="/login" className="block hover:text-primary">Intranet</Link>
        </div>
         
      )}
    </header>
  )
}

export default Navbar
