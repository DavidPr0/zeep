import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #13213c;
  height: 50px;
  border-radius: 30px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Raleway-Medium';
  text-transform: uppercase;
`;
