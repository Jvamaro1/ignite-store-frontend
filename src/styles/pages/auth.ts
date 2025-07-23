import { styled } from '@stitches/react';

export const AuthContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '80vh',
  padding: '2rem',
});

export const AuthForm = styled('form', {
  background: '$gray800',
  padding: '2rem',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const AuthTitle = styled('h1', {
  color: '$gray100',
  fontSize: '$xl',
  textAlign: 'center',
  marginBottom: '1rem',
});

export const AuthInput = styled('input', {
  background: '$gray900',
  border: '1px solid $gray600',
  borderRadius: '6px',
  padding: '1rem',
  color: '$gray100',
  fontSize: '$md',

  '&::placeholder': {
    color: '$gray400',
  },

  '&:focus': {
    outline: 'none',
    borderColor: '$green500',
  },
});

export const AuthButton = styled('button', {
  background: '$green500',
  color: '$white',
  border: 'none',
  borderRadius: '6px',
  padding: '1rem',
  fontSize: '$md',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.2s',

  '&:hover': {
    background: '$green300',
  },
});

export const AuthToggle = styled('p', {
  color: '$gray300',
  textAlign: 'center',
  fontSize: '$sm',
});

export const AuthLink = styled('span', {
  color: '$green500',
  cursor: 'pointer',
  textDecoration: 'underline',

  '&:hover': {
    color: '$green300',
  },
});

