import COLORS from '@/constants/theme-constants';
import { Text, View } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Library = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Text>Library</Text>
    </View>
  );
};
export default Library;
