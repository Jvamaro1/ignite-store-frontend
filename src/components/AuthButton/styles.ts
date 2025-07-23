import { styled } from '@stitches/react';
import Link from 'next/link';

export const AuthButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const UserInfo = styled('span', {
  color: '$gray300',
  fontSize: '$sm',
});

export const LoginButton = styled(Link, {
  color: '$gray300',
  fontSize: '$sm',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  border: '1px solid $gray600',
  transition: 'all 0.2s',

  '&:hover': {
    color: '$white',
    borderColor: '$green500',
  },
});

export const LogoutButton = styled('button', {
  color: '$gray300',
  fontSize: '$sm',
  background: 'transparent',
  border: '1px solid $gray600',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'all 0.2s',

  '&:hover': {
    color: '$white',
    borderColor: '$red500',
  },
});

