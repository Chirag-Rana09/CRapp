import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screen/Profile';
import About from '../screen/about';
import Service from '../screen/Service';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../screen/SplashScreen';
import Walkthrough from '../screen/Walkthrough';
import Login from '../screen/Login';
import _ from 'lodash';
import ChangeLanguage from '../screen/ChangeLanguage';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import i18n from '../language';
import BottomTabs from './BottomTab';
import Setting from '../screen/Settings';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function NavStart() {
  const ReduxVal = useSelector(state => state.user);

  useEffect(() => {
    if (ReduxVal?.language) {
      i18n.changeLanguage(ReduxVal?.language); // 🌐 change language dynamically
    }
  }, [ReduxVal]);

  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Walkthrough"
        component={Walkthrough}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" options={{headerShown: false}}>
        {() => {
          return <BottomTabs type="animated" />;
        }}
      </Stack.Screen>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangeLanguage"
        component={ChangeLanguage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Service"
        component={Service}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default NavStart;
