import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Phone, Instagram, Search, Menu } from 'lucide-react'
import { CartContext } from '../App'

const Header = () => {
  const { totalItems } = useContext(CartContext)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={14} className="mr-1" />
              <span>Atendimento: (11) 99999-9999</span>
            </div>
            <Link to="#" className="hover:text-orange-400 transition-colors">
              Rastrear minha compra
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="#" className="hover:text-orange-400 transition-colors">
              <Instagram size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/amaro_eletronicos_logo.png" 
              alt="Amaro Eletronicos" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="O que você procura?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/auth" 
              className="hidden md:block text-gray-700 hover:text-orange-500 transition-colors text-sm"
            >
              Entre ou cadastre-se
            </Link>
            
            <Link 
              to="/carrinho" 
              className="relative text-gray-700 hover:text-orange-500 transition-colors"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 border-t pt-4 hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className={`font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-orange-500 border-b-2 border-orange-500 pb-1' 
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                Início
              </Link>
            </li>
            <li>
              <Link 
                to="/produtos" 
                className={`font-medium transition-colors duration-200 ${
                  isActive('/produtos') 
                    ? 'text-orange-500 border-b-2 border-orange-500 pb-1' 
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link 
                to="/sobre" 
                className={`font-medium transition-colors duration-200 ${
                  isActive('/sobre') 
                    ? 'text-orange-500 border-b-2 border-orange-500 pb-1' 
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link 
                to="/contato" 
                className={`font-medium transition-colors duration-200 ${
                  isActive('/contato') 
                    ? 'text-orange-500 border-b-2 border-orange-500 pb-1' 
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

