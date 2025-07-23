import React, { useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Plus, Minus, Star, Shield, Truck } from 'lucide-react'
import { getProductById } from '../data/products'
import { CartContext } from '../App'

const ProductDetail = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useContext(CartContext)
  
  const [selectedFlavor, setSelectedFlavor] = useState(product?.flavors[0] || '')
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Produto não encontrado</h1>
            <Link to="/produtos" className="text-orange-500 hover:text-orange-600">
              Voltar aos produtos
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: `${product.name} - ${selectedFlavor}`,
      price: product.price,
      image: product.image,
      flavor: selectedFlavor,
      quantity: quantity
    })
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ))
  }

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link 
            to="/produtos"
            className="flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Voltar aos Produtos
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-md p-8 aspect-square flex items-center justify-center">
              {/* Badges */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                    {product.badge}
                  </span>
                </div>
              )}
              
              {discountPercentage > 0 && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    -{discountPercentage}%
                  </span>
                </div>
              )}

              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 rounded-lg">
                  <span className="bg-red-600 text-white px-6 py-3 rounded font-bold text-lg">
                    Fora de Estoque
                  </span>
                </div>
              )}

              <img 
                src={product.image} 
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-3">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600">
                  ({product.rating}/5 - {product.reviews} avaliações)
                </span>
              </div>
            )}

            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Pricing */}
            <div className="mb-6">
              {product.originalPrice && (
                <div className="text-lg text-gray-500 line-through mb-1">
                  R$ {product.originalPrice.toFixed(2)}
                </div>
              )}
              
              <div className="text-4xl font-bold text-red-600 mb-2">
                R$ {product.price.toFixed(2)}
              </div>

              {product.installments && (
                <div className="text-gray-600 mb-1">
                  {product.installments} sem juros
                </div>
              )}

              {product.cashDiscount && (
                <div className="text-green-600 font-medium">
                  Ou {product.cashDiscount}
                </div>
              )}
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Características:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Flavor Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Sabor:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {product.flavors.map((flavor) => (
                  <button
                    key={flavor}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors duration-200 ${
                      selectedFlavor === flavor
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-orange-300'
                    }`}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Quantidade:</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            {product.inStock ? (
              <button
                onClick={handleAddToCart}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-8 rounded-lg font-bold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Adicionar ao Carrinho - R$ {(product.price * quantity).toFixed(2)}</span>
              </button>
            ) : (
              <button
                disabled
                className="w-full bg-gray-400 text-white py-4 px-8 rounded-lg font-bold text-lg cursor-not-allowed"
              >
                Produto Indisponível
              </button>
            )}

            {/* Trust Badges */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center text-gray-600">
                <Truck className="mr-3" size={20} />
                <span>Frete grátis para todo o Brasil</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Shield className="mr-3" size={20} />
                <span>Compra 100% segura</span>
              </div>
            </div>

            {/* Warning */}
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Aviso:</strong> Este produto contém nicotina. A nicotina é um químico viciante. 
                Proibida a venda para menores de 18 anos.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* This would typically fetch related products */}
            {/* For now, showing placeholder */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Ignite V35</h3>
              <p className="text-gray-600 mb-2">3500 puffs</p>
              <p className="text-orange-500 font-bold">R$ 65,90</p>
              <Link to="/produto/2" className="text-orange-500 hover:text-orange-600 text-sm">
                Ver Detalhes
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Ignite V50</h3>
              <p className="text-gray-600 mb-2">5000 puffs</p>
              <p className="text-orange-500 font-bold">R$ 85,90</p>
              <Link to="/produto/3" className="text-orange-500 hover:text-orange-600 text-sm">
                Ver Detalhes
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Ignite V60</h3>
              <p className="text-gray-600 mb-2">6000 puffs</p>
              <p className="text-orange-500 font-bold">R$ 95,90</p>
              <Link to="/produto/4" className="text-orange-500 hover:text-orange-600 text-sm">
                Ver Detalhes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

