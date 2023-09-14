import { StyleSheet, Text, View, Image } from 'react-native';
import LoginSVG from '../assets/misc/login.svg';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={LoginSVG} style={styles.logoImage} contentFit="fill" />
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
  logoImage: {
    height: 160,
    width: 300,
  },
});

export default LoginScreen;
