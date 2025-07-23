import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { CartContext } from '../App'

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useContext(CartContext)

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Seu carrinho está vazio
            </h1>
            <p className="text-gray-600 mb-8">
              Adicione alguns produtos incríveis ao seu carrinho para continuar.
            </p>
            <Link 
              to="/produtos"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              Continuar Comprando
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Carrinho de Compras
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold">
                  Itens no Carrinho ({totalItems})
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {items.map(item => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                          {item.name}
                        </h3>
                        <p className="text-gray-600">{item.puffs} puffs</p>
                        {item.selectedFlavor && (
                          <p className="text-sm text-gray-500">
                            Sabor: {item.selectedFlavor}
                          </p>
                        )}
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 hover:bg-gray-300 p-1 rounded transition-colors duration-200"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 hover:bg-gray-300 p-1 rounded transition-colors duration-200"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                          R$ {item.price.toFixed(2)} cada
                        </p>
                      </div>
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 p-2 transition-colors duration-200"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Continue Shopping */}
            <div className="mt-6">
              <Link 
                to="/produtos"
                className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200 inline-flex items-center"
              >
                ← Continuar Comprando
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-6">Resumo do Pedido</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({totalItems} itens)</span>
                  <span className="font-semibold">R$ {totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete</span>
                  <span className="font-semibold text-green-600">Grátis</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold text-orange-500">
                      R$ {totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/checkout"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                Finalizar Compra
                <ArrowRight className="ml-2" size={20} />
              </Link>
              
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Frete grátis</strong> para todo o Brasil
                </p>
              </div>
              
              <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-700 text-center">
                  <strong>Compra segura</strong> - Seus dados estão protegidos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

