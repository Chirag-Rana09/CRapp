/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import 'react-native-gesture-handler';
import NavStart from './app/navigation';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import store, {persistor} from './app/redux/store';
import {I18nextProvider} from 'react-i18next';
import i18n from './app/language';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator, useColorScheme} from 'react-native';
import {darkColors, lightColors} from './app/config/theme';

function App() {
  const [loading, setLoading] = useState(true);
  const systemTheme = useColorScheme();

  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...lightColors,
    },
  };
  const darkTheme = {
    ...DarkTheme,
    colors: {
      ...darkColors,
    },
  };

  // const isDarkMode =
  //   theme == 'systemDefault' ? systemTheme == 'dark' : darkMode;
  // const appTheme = isDarkMode ? darkTheme : lightTheme;
  const appTheme = lightTheme;
  console.log('appTheme ￠===== ⚛️ )', appTheme);

  // const isDarkMode = useColorScheme() === 'dark';
  // this function for initialize store and handle the loader
  function onBeforeLift() {
    if (store) {
      setLoading(false);
    }
  }
  return (
    <ThemeProvider>
      <NavigationContainer theme={appTheme}>
        <Provider store={store}>
          <PersistGate
            loading={null}
            persistor={persistor}
            onBeforeLift={onBeforeLift}>
            <I18nextProvider i18n={i18n}>
              {loading ? <ActivityIndicator /> : <NavStart />}
            </I18nextProvider>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
