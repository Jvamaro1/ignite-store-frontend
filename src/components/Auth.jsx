import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, User, Mail, Lock, Eye, EyeOff } from 'lucide-react'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (isLogin) {
      // Lógica de login
      console.log('Login:', { email: formData.email, password: formData.password })
      alert('Login realizado com sucesso!')
    } else {
      // Lógica de cadastro
      if (formData.password !== formData.confirmPassword) {
        alert('As senhas não coincidem!')
        return
      }
      console.log('Cadastro:', formData)
      alert('Cadastro realizado com sucesso!')
    }
    
    // Resetar formulário
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao site
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isLogin ? 'Entrar' : 'Criar Conta'}
          </h1>
          <p className="text-gray-600">
            {isLogin 
              ? 'Acesse sua conta para continuar' 
              : 'Crie sua conta para começar'
            }
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome (apenas no cadastro) */}
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Digite seu nome completo"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="Digite seu e-mail"
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="Digite sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirmar Senha (apenas no cadastro) */}
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmar senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Confirme sua senha"
                  />
                </div>
              </div>
            )}

            {/* Esqueci minha senha (apenas no login) */}
            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                >
                  Esqueci minha senha
                </button>
              </div>
            )}

            {/* Botão de submit */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all"
            >
              {isLogin ? 'Entrar' : 'Criar Conta'}
            </button>
          </form>

          {/* Divisor */}
          <div className="mt-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">ou</span>
              </div>
            </div>
          </div>

          {/* Toggle entre login e cadastro */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
              <button
                type="button"
                onClick={toggleMode}
                className="ml-2 text-orange-600 hover:text-orange-700 font-semibold"
              >
                {isLogin ? 'Criar conta' : 'Fazer login'}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Ao continuar, você concorda com nossos{' '}
            <Link to="/termos" className="text-orange-600 hover:text-orange-700">
              Termos de Uso
            </Link>{' '}
            e{' '}
            <Link to="/privacidade" className="text-orange-600 hover:text-orange-700">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth

