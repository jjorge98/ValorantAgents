import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Home from './Home';
import Login from './Login';
import Agent from './Agent';

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
            headerTintColor: '#0a1b1f',
            headerStyle: { backgroundColor: '#ff4457' },
          }}
        />

        <Stack.Screen name="Agents" component={Agent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
