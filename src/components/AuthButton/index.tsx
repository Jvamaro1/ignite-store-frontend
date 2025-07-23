import { useAuth } from '@/context/AuthContext';
import { AuthButtonContainer, UserInfo, LoginButton, LogoutButton } from './styles';

export function AuthButton() {
  const { user, logout } = useAuth();

  if (user) {
    return (
      <AuthButtonContainer>
        <UserInfo>
          Olá, {user.name}
        </UserInfo>
        <LogoutButton onClick={logout}>
          Sair
        </LogoutButton>
      </AuthButtonContainer>
    );
  }

  return (
    <AuthButtonContainer>
      <LoginButton href="/auth">
        Entre ou cadastre-se
      </LoginButton>
    </AuthButtonContainer>
  );
}

