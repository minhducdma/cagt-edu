import React, { ReactNode } from 'react';
import LoginScreen from '@/screens/LoginScreen';
import ErrorBoundary from '@/components/ErrorBoundary';

const App: () => ReactNode = () => {
  return (
    <ErrorBoundary>
      <LoginScreen />
    </ErrorBoundary>
  );
};

export default App;
