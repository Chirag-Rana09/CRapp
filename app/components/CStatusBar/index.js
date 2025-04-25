import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Appearance, StatusBar, useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';

const CStatusBar = () => {
  const colorScheme = Appearance.getColorScheme();
  const systemTheme = useColorScheme();
  console.log('systemTheme ￠===== ⚛️ )', systemTheme);

  // const isDarkMode =
  //   useTheme == 'systemDefault' ? colorScheme == 'dark' : 'light';

  return (
    <StatusBar
      translucent
      backgroundColor={'red'}
      barStyle={!systemTheme === 'light' ? 'light-content' : 'dark-content'}
    />
  );
};

export default CStatusBar;
