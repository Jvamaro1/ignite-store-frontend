import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Amaro Eletronicos</span>
            </div>
            <p className="text-gray-300 mb-4">
              A marca premium de pods descartáveis que oferece a melhor experiência 
              de vaporização com qualidade superior e sabores excepcionais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Atendimento</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Política de Troca
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Amaro Eletronicos. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Este produto contém nicotina. A nicotina é um químico viciante. Proibida a venda para menores de 18 anos.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

