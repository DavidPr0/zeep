import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../pages/Welcome';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator>
    <App.Screen
      name="Welcome"
      component={Welcome}
      options={{ title: 'ZeeP' }}
    />
  </App.Navigator>
);

export default AppRoutes;
