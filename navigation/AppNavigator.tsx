import AuthNavigator from '@/navigation/AuthNavigator';
import HomeNavigator from './HomeNavigator';
const isActiveHome = true;
const AppNavigator = () => {
  return !isActiveHome ? <AuthNavigator /> : <HomeNavigator />;
};
export default AppNavigator;
