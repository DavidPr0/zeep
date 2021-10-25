import React, { useCallback } from 'react';
import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

import { Container } from './styles';

const Welcome: React.FC = () => {
  const { navigate } = useNavigation();
  const { signOut } = useAuth();

  const handleMaps = useCallback(() => {
    navigate('MapRoutes');
  }, []);

  return (
    <Container>
      <Text>Olá</Text>
      <Button
        onPress={() => {
          signOut();
        }}>
        Sair
      </Button>
      <Button onPress={() => handleMaps()}>Rotass</Button>
    </Container>
  );
};

export default Welcome;
