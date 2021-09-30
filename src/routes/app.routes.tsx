import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../pages/Welcome';
import MapRoutes from '../pages/MapRoutes';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator>
    <App.Screen
      name="Welcome"
      component={Welcome}
      options={{ title: 'ZeeP' }}
    />
    <App.Screen name="MapRoutes" component={MapRoutes} />
  </App.Navigator>
);

export default AppRoutes;
