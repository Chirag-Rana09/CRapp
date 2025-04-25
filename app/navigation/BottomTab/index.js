import React from 'react';
import {
  Animated,
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../../screen/Home';
import Profile from '../../screen/Profile';
import About from '../../screen/about';
import Service from '../../screen/Service';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import Styles from './style';

const Tab = createBottomTabNavigator();

const tabIcons = {
  Home: 'home-outline',
  Service: 'construct-outline',
  About: 'information-circle-outline',
  Profile: 'person-outline',
};

const AnimatedTabButton = ({children, accessibilityState, onPress, route}) => {
  const focused = accessibilityState.selected;
  const {t} = useTranslation();
  const {colors} = useTheme();
  const styles = Styles(colors);
  const scale = React.useRef(new Animated.Value(1)).current;
  const opacity = React.useRef(new Animated.Value(0.6)).current;
  const translateY = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: focused ? 1.2 : 1,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: focused ? 1 : 0.6,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: focused ? -10 : 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, [focused]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          styles.tabContainer,
          {
            transform: [{scale}, {translateY}],
            opacity,
          },
        ]}>
        <View style={[styles.iconWrapper, focused && styles.glow]}>
          {children}
        </View>

        {/* Active underline */}
        {focused && <View style={styles.underline} />}

        {/* Label */}
        {focused && <Text style={styles.label}>{t(route.name)}</Text>}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const BottomTabs = ({type = 'animated'}) => {
  const {colors} = useTheme();

  if (type !== 'animated') {
    // fallback
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Service" component={Service} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 100,
          backgroundColor: colors?.primaryLight,
          borderRadius: 30,
        },
        tabBarButton: props => <AnimatedTabButton {...props} route={route} />,
        tabBarIcon: ({color, size}) => (
          <Ionicons name={tabIcons[route.name]} size={30} color={color} />
        ),
        tabBarActiveTintColor: colors?.red,
        // tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Service" component={Service} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
