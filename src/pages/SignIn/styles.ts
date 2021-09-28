import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  height: 100px;
  padding: 0 0px ${Platform.OS === 'android' ? '70' : 40}px;
`;

export const Header = styled.View`
  flex: 3;
  align-items: center;
  justify-content: center;
  background: #13213c;
`;

export const BgSoon = styled.View`
  background: #faa445;
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`;

export const Body = styled.View`
  flex: 2;
  margin-top: 40px;
`;

export const NameSoon = styled.View`
  margin-top: 10px;
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
`;

export const BodyInput = styled.View`
  margin: 0 20px;
`;

export const BodyButton = styled.View`
  margin: 35px 40px 0px 40px;
`;
