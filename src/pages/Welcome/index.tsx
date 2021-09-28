import React from 'react';
import { Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

import { Container } from './styles';

const Welcome: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Text>Olá</Text>
      <Button
        onPress={() => {
          signOut();
        }}>
        Sair
      </Button>
    </Container>
  );
};

export default Welcome;
