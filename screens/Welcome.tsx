import { StyleSheet, Text, View } from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
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

export default Welcome;
