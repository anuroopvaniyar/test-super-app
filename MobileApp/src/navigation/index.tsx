import React from 'react';
import SignUp from 'src/screens/signUp';
import * as Routes from 'appConstants/routes';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from 'src/screens/settings';
import Dashboard from 'src/screens/dashboard';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={Routes.ROUTE_SIGN_UP}>
      <Stack.Screen name={Routes.ROUTE_SIGN_UP} component={SignUp} />
      <Stack.Screen name={Routes.ROUTE_SETTINGS} component={Settings} />
      <Stack.Screen name={Routes.ROUTE_DASHBOARD} component={Dashboard} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
