import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

const ProductCard = ({ product, onAddToCart }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={12}
        className={index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ))
  }

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.badge}
          </span>
        </div>
      )}

      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-2 right-2 z-10">
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discountPercentage}%
          </span>
        </div>
      )}

      {/* Stock Status */}
      {!product.inStock && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <span className="bg-red-600 text-white px-4 py-2 rounded font-bold">
            Fora de Estoque
          </span>
        </div>
      )}

      {/* Product Image */}
      <div className="aspect-square bg-gray-100 flex items-center justify-center p-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-1 text-sm">
          {product.name}
        </h3>

        {/* Puffs */}
        <p className="text-gray-600 text-sm mb-2">
          {product.puffs.toLocaleString()} puffs
        </p>

        {/* Description */}
        <p className="text-gray-600 text-xs mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center mb-3">
            <div className="flex items-center mr-2">
              {renderStars(product.rating)}
            </div>
            <span className="text-xs text-gray-600">
              ({product.reviews} avaliações)
            </span>
          </div>
        )}

        {/* Pricing */}
        <div className="mb-3">
          {/* Original Price */}
          {product.originalPrice && (
            <div className="text-xs text-gray-500 line-through mb-1">
              R$ {product.originalPrice.toFixed(2)}
            </div>
          )}
          
          {/* Current Price */}
          <div className="text-lg font-bold text-red-600 mb-1">
            R$ {product.price.toFixed(2)}
          </div>

          {/* Installments */}
          {product.installments && (
            <div className="text-xs text-gray-600 mb-1">
              {product.installments} sem juros
            </div>
          )}

          {/* Cash Discount */}
          {product.cashDiscount && (
            <div className="text-xs text-green-600 font-medium">
              Ou {product.cashDiscount}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Link 
            to={`/produto/${product.id}`}
            className="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded text-sm font-medium transition-colors duration-200"
          >
            Ver Detalhes
          </Link>
          
          {product.inStock && (
            <button
              onClick={() => onAddToCart(product)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-sm font-medium transition-colors duration-200"
            >
              Comprar
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard

