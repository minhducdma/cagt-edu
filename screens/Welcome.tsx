import { View, Image, Text, Pressable } from 'react-native';
import Button from '@/components/ui/Button';
import COLORS from '@/constants/theme-constants';

const Welcome = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View style={{ flex: 1 }}>
        <Image
          source={require('@/assets/images/hero1.jpg')}
          style={{
            height: 100,
            width: 100,
            borderRadius: 20,
            position: 'absolute',
            top: 10,
            transform: [
              { translateX: 20 },
              { translateY: 50 },
              { rotate: '-15deg' },
            ],
          }}
        />
        <Image
          source={require('@/assets/images/hero3.jpg')}
          style={{
            height: 100,
            width: 100,
            borderRadius: 20,
            position: 'absolute',
            top: -30,
            left: 100,
            transform: [
              { translateX: 50 },
              { translateY: 50 },
              { rotate: '-5deg' },
            ],
          }}
        />

        <Image
          source={require('@/assets/images/hero3.jpg')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            position: 'absolute',
            top: 130,
            left: -50,
            transform: [
              { translateX: 50 },
              { translateY: 50 },
              { rotate: '15deg' },
            ],
          }}
        />

        <Image
          source={require('@/assets/images/hero2.jpg')}
          style={{
            height: 200,
            width: 200,
            borderRadius: 20,
            position: 'absolute',
            top: 110,
            left: 100,
            transform: [
              { translateX: 50 },
              { translateY: 50 },
              { rotate: '-15deg' },
            ],
          }}
        />
      </View>

      <View
        style={{
          paddingHorizontal: 22,
          position: 'absolute',
          top: 400,
          width: '100%',
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: COLORS.white,
          }}
        >
          Chào mừng đến với
        </Text>
        <Text
          style={{
            fontSize: 46,
            fontWeight: 'bold',
            color: COLORS.white,
          }}
        >
          CAGT APP
        </Text>

        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.white,
              marginVertical: 4,
            }}
          >
            Phần mềm hỗ trợ học sinh, sinh viên hàng đầu
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.white,
            }}
          >
            Việt Nam
          </Text>
        </View>

        <Button
          title="Tham gia ngay"
          onPress={() => navigation.navigate('Signup')}
          style={{
            marginTop: 22,
            fontweight: 'bold',
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            marginTop: 12,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: COLORS.white,
            }}
          >
            Bạn đã có tài khoản ?
          </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                fontWeight: 'bold',
                marginLeft: 4,
              }}
            >
              Đăng nhập
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
