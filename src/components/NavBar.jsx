import { useState } from "react"
import { Menu } from "lucide-react"

function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-primary">Moda Plus</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex flex-row gap-6 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-primary">Home</a></li>
          <li><a href="/colecoes" className="hover:text-primary">Coleções</a></li>
          <li><a href="/promocoes" className="hover:text-primary">Promoções</a></li>
          <li><a href="/contato" className="hover:text-primary">Contato</a></li>
          <li><a href="/intranet" className="hover:text-primary">Intranet</a></li>
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
          <a href="/" className="block hover:text-primary">Home</a>
          <a href="/colecoes" className="block hover:text-primary">Coleções</a>
          <a href="/promocoes" className="block hover:text-primary">Promoções</a>
          <a href="/contato" className="block hover:text-primary">Contato</a>
          <a href="/intranet" className="block hover:text-primary">Intranet</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
