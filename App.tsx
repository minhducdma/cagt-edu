import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup, Welcome } from '@/screens/Index';
import ErrorBoundary from '@/components/ErrorBoundary';

const App: () => ReactNode = () => {
  const Stack = createNativeStackNavigator();
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

export default App;
