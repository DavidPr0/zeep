import React, { useRef, useCallback } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  NativeModules,
  Alert,
} from 'react-native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';
import icon from '../../assets/img/icon.png';
import NameIcon from '../../assets/img/nameIcon.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../Utils/getValidationErrors';

import {
  Container,
  Header,
  Body,
  BgSoon,
  NameSoon,
  BodyInput,
  BodyButton,
} from './styles';

import { ScrollView } from 'react-native-gesture-handler';
// import { } from '../../'
// interface
interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const { navigate } = useNavigation();

  const { signIn } = useAuth();

  const handleSubmit = (data: object) => {
    // console.log(data);
    navigate('Welcome');
    NativeModules.ToastModules.show('Olá DevOps dos Explicaê');
  };

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório!')
          .email('Digite um e-mail válido!'),
        password: Yup.string().required('Senha obrigatória!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        // console.log('erro', errors);
        // err.map(inde => console.log(inde));
        // errors.forEach(errr => console.log(errr));
        // err.map(errr => console.log(errr));
        NativeModules.ToastModules.show(errors.message);
        formRef.current?.setErrors(errors);

        return;
      }
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais.',
      );
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
      enabled>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}>
        <Container>
          <Header>
            <BgSoon>
              <Image style={{ width: 110, height: 110 }} source={icon} />
            </BgSoon>
            <NameSoon>
              <Image
                style={{ resizeMode: 'contain', width: 250 }}
                source={NameIcon}
              />
            </NameSoon>
          </Header>
          <Body>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <BodyInput>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  icon="user"
                  name="email"
                  placeholder="Acesso"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordInputRef.current?.focus();
                  }}
                />
                <Input
                  ref={passwordInputRef}
                  secureTextEntry
                  icon="lock"
                  name="password"
                  placeholder="Senha"
                  returnKeyType="send"
                  onSubmitEditing={() => formRef.current?.submitForm()}
                />
              </BodyInput>
              <BodyButton>
                <Button onPress={() => formRef.current?.submitForm()}>
                  Logar
                </Button>
              </BodyButton>
            </Form>
          </Body>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
