import React, { useState, useContext } from 'react'
import { products } from '../data/products'
import { CartContext } from '../App'
import ProductCard from './ProductCard'
import { Filter, X } from 'lucide-react'

const Products = () => {
  const { addToCart } = useContext(CartContext)
  const [filters, setFilters] = useState({
    model: 'all',
    priceRange: 'all',
    rating: 'all'
  })
  const [sortBy, setSortBy] = useState('popularity')
  const [showFilters, setShowFilters] = useState(false)

  // Filter products
  const filteredProducts = products.filter(product => {
    // Model filter
    if (filters.model !== 'all' && product.model !== filters.model) {
      return false
    }

    // Price range filter
    if (filters.priceRange !== 'all') {
      const price = product.price
      switch (filters.priceRange) {
        case 'under50':
          if (price >= 50) return false
          break
        case '50to100':
          if (price < 50 || price > 100) return false
          break
        case '100to150':
          if (price < 100 || price > 150) return false
          break
        case 'over150':
          if (price <= 150) return false
          break
        default:
          break
      }
    }

    // Rating filter
    if (filters.rating !== 'all') {
      const rating = product.rating || 0
      const minRating = parseFloat(filters.rating)
      if (rating < minRating) return false
    }

    return true
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return (b.rating || 0) - (a.rating || 0)
      case 'newest':
        return b.id - a.id
      default: // popularity
        return (b.reviews || 0) - (a.reviews || 0)
    }
  })

  const clearFilters = () => {
    setFilters({
      model: 'all',
      priceRange: 'all',
      rating: 'all'
    })
  }

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      flavor: product.flavors[0] // Default to first flavor
    })
  }

  const models = ['V15', 'V35', 'V50', 'V60', 'V80', 'V150', 'V150 Pro', 'V250']

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Nossos Produtos</h1>
          <p className="text-gray-600">Descubra toda a linha de pods descartáveis Ignite</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold flex items-center">
                  <Filter className="mr-2" size={20} />
                  Filtros
                </h2>
                <button 
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Model Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Modelo</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="model"
                        value="all"
                        checked={filters.model === 'all'}
                        onChange={(e) => setFilters({...filters, model: e.target.value})}
                        className="mr-2"
                      />
                      <span className="text-sm">Todos os modelos</span>
                    </label>
                    {models.map(model => (
                      <label key={model} className="flex items-center">
                        <input
                          type="radio"
                          name="model"
                          value={model}
                          checked={filters.model === model}
                          onChange={(e) => setFilters({...filters, model: e.target.value})}
                          className="mr-2"
                        />
                        <span className="text-sm">{model}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Preço</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value="all"
                        checked={filters.priceRange === 'all'}
                        onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                        className="mr-2"
                      />
                      <span className="text-sm">Todos os preços</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value="under50"
                        checked={filters.priceRange === 'under50'}
                        onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                        className="mr-2"
                      />
                      <span className="text-sm">Até R$ 50</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value="50to100"
                        checked={filters.priceRange === '50to100'}
                        onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                        className="mr-2"
                      />
                      <span className="text-sm">R$ 50 - R$ 100</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value="100to150"
                        checked={filters.priceRange === '100to150'}
                        onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                        className="mr-2"
                      />
                      <span className="text-sm">R$ 100 - R$ 150</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value="over150"
                        checked={filters.priceRange === 'over150'}
                        onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                        className="mr-2"
                      />
                      <span className="text-sm">Acima de R$ 150</span>
                    </label>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Avaliação</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value="all"
                        checked={filters.rating === 'all'}
                        onChange={(e) => setFilters({...filters, rating: e.target.value})}
                        className="mr-2"
                      />
                      <span className="text-sm">Todas as avaliações</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value="4"
                        checked={filters.rating === '4'}
                        onChange={(e) => setFilters({...filters, rating: e.target.value})}
                        className="mr-2"
                      />
                      <span className="text-sm">4 estrelas ou mais</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value="4.5"
                        checked={filters.rating === '4.5'}
                        onChange={(e) => setFilters({...filters, rating: e.target.value})}
                        className="mr-2"
                      />
                      <span className="text-sm">4.5 estrelas ou mais</span>
                    </label>
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={clearFilters}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded font-medium transition-colors duration-200"
                >
                  Limpar Filtros
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">
                  Exibindo 1–{sortedProducts.length} de {sortedProducts.length} resultados
                </span>
                <button 
                  className="lg:hidden bg-gray-200 px-4 py-2 rounded flex items-center"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="mr-2" size={16} />
                  Filtros
                </button>
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="popularity">Ordenar por popularidade</option>
                <option value="rating">Ordenar por avaliação</option>
                <option value="newest">Ordenar por mais recente</option>
                <option value="price-low">Ordenar por preço: menor para maior</option>
                <option value="price-high">Ordenar por preço: maior para menor</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">Nenhum produto encontrado com os filtros selecionados.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium transition-colors duration-200"
                >
                  Limpar Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

