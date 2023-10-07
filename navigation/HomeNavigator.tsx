import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '@/screens/home/Index';
import { Note } from '@/screens/note/Index';
import { Library } from '@/screens/library/Index';
import { TimeTable } from '@/screens/time-table/Index';
import COLORS from '@/constants/theme-constants';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeNavigator = () => {
  const Tabs = createBottomTabNavigator();
  const renderTabBarIcon = ({ focused, color, size }, iconName) => (
    <Ionicons
      name={focused ? iconName : `${iconName}-outline`}
      size={size}
      color={color}
    />
  );
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: COLORS.white,
          height: 70,
          borderRadius: 15,
          paddingBottom: 10,
          ...styles.shadow,
        },
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => renderTabBarIcon(props, 'home'),
        }}
      />
      <Tabs.Screen
        name="Note"
        component={Note}
        options={{
          tabBarIcon: (props) => renderTabBarIcon(props, 'document-text'),
        }}
      />
      <Tabs.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: (props) => renderTabBarIcon(props, 'book'),
        }}
      />
      <Tabs.Screen
        name="Time Table"
        component={TimeTable}
        options={{
          tabBarIcon: (props) => renderTabBarIcon(props, 'time'),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.charcoal,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default HomeNavigator;
