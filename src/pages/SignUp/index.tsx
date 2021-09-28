import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>Logout</Text>
      <Button title="back to SignIn" onPress={() => navigate('SignIn')} />
    </View>
  );
};

export default SignUp;
