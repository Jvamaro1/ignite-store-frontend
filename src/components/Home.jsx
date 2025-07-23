import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Zap, Award, CheckCircle, Package, Heart } from 'lucide-react'
import { CartContext } from '../App'
import { getFeaturedProducts } from '../data/products'
import ProductCard from './ProductCard'

const Home = () => {
  const { addToCart } = useContext(CartContext)
  const featuredProducts = getFeaturedProducts()

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      flavor: product.flavors[0] // Default to first flavor
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Simplified */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A Experiência Definitiva em <span className="text-orange-400">Pods Ignite</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Descubra a linha premium de pods descartáveis que redefine a vaporização 
            com qualidade superior, sabores inigualáveis e tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/produtos"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Explorar Produtos
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link 
              to="/sobre"
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-center"
            >
              Conheça a Ignite
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Ignite - Detailed */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que a Ignite é a sua Melhor Escolha?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprometidos com a excelência, oferecemos mais do que apenas pods; entregamos uma experiência.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Incomparável</h3>
              <p className="text-gray-600">
                Cada pod é fabricado com os mais altos padrões, utilizando ingredientes premium para garantir pureza e sabor.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Superior</h3>
              <p className="text-gray-600">
                Desfrute de uma vaporização suave e consistente, com pods que entregam a quantidade exata de puffs prometida.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Variedade de Sabores</h3>
              <p className="text-gray-600">
                Uma vasta gama de sabores exclusivos, desenvolvidos para agradar a todos os paladares, do frutado ao mentolado.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Praticidade e Portabilidade</h3>
              <p className="text-gray-600">
                Pods descartáveis prontos para usar, ideais para o seu dia a dia, sem necessidade de recargas ou manutenção.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experiência Segura</h3>
              <p className="text-gray-600">
                Todos os nossos produtos são testados e certificados, garantindo uma experiência segura e confiável.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte ao Cliente</h3>
              <p className="text-gray-600">
                Nossa equipe está pronta para te ajudar com qualquer dúvida ou necessidade, garantindo sua satisfação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Smaller Images */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Produtos Mais Populares
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra os pods Ignite que estão conquistando o mercado. Qualidade e sabor em cada puff.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/produtos"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              Ver Todos os Produtos
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pronto para Elevar sua Experiência?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de clientes satisfeitos e descubra o mundo de sabor e qualidade que só a Ignite oferece.
          </p>
          <Link 
            to="/produtos"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
          >
            Comprar Agora
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

