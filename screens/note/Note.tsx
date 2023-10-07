import COLORS from '@/constants/theme-constants';
import { Text, View } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Note = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Text>Note</Text>
    </View>
  );
};
export default Note;
