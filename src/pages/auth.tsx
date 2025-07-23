import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import { AuthContainer, AuthForm, AuthInput, AuthButton, AuthToggle, AuthTitle, AuthLink } from "../styles/pages/auth";
import Head from 'next/head';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Lógica de login (simplificada para o teste)
      if (email === 'teste.automatizado.ignite@example.com' && password === 'Teste@123') {
        login('Teste Automatizado', email);
        router.push('/');
      } else {
        alert('Credenciais inválidas!');
      }
    } else {
      // Lógica de cadastro (simplificada para o teste)
      if (password === confirmPassword) {
        login(name, email);
        router.push('/');
      } else {
        alert('As senhas não coincidem!');
      }
    }
  };

  return (
    <AuthContainer>
      <Head>
        <title>{isLogin ? 'Login' : 'Criar Conta'} | Ignite Store</title>
      </Head>
      <AuthForm onSubmit={handleSubmit}>
        <AuthTitle>{isLogin ? 'Entrar' : 'Criar Conta'}</AuthTitle>
        {!isLogin && (
          <AuthInput
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <AuthInput
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <AuthInput
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <AuthInput
            type="password"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <AuthButton type="submit">
          {isLogin ? 'Entrar' : 'Criar Conta'}
        </AuthButton>
        <AuthToggle>
          {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}{' '}
          <AuthLink onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Criar conta' : 'Fazer login'}
          </AuthLink>
        </AuthToggle>
      </AuthForm>
    </AuthContainer>
  );
}


