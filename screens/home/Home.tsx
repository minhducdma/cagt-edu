import COLORS from '@/constants/theme-constants';
import { Text, View } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Text>Home</Text>
    </View>
  );
};
export default Home;
