import { StyleSheet, Text, View } from 'react-native';
import LoginSVG from '@/assets/misc/login.svg';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LoginSVG width={300} height={300} />
      <Text>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoginScreen;
