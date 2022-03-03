import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Home from './Home';
import Login from './Login';
import Agent from './Agent';
import { colors } from '../assets/styles/colors';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: colors.darkGray,
            headerStyle: { backgroundColor: colors.mainColor },
          }}
        />

        <Stack.Screen
          name="Agent"
          component={Agent}
          options={{
            headerTintColor: colors.darkGray,
            headerStyle: { backgroundColor: colors.mainColor },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
