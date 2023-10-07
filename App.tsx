import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ErrorBoundary from '@/shared/components/ErrorBoundary';
import AppNavigator from '@/navigation/AppNavigator';
import { usePushNotifications } from '@/shared/hooks/usePushNotifications';

const App: () => ReactNode = () => {
  const { expoPushToken } = usePushNotifications();
  console.log(expoPushToken);
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

export default App;
