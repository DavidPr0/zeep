import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #e5e5e5;
  border-radius: 10px;
  margin-bottom: 12px;
  border: #e5e5e5;

  flex-direction: row;
  align-items: center;
  ${props =>
    props.isErrored &&
    css`
      border: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      border: #faa445;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #13213c;
  font-size: 16px;
  font-family: Raleway-Medium;
`;

export const Icon = styled(FeatherIcon)`
  margin-left: 0px;
`;
