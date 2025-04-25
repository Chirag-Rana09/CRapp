import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import WalkthroughScreen from '../../components/Walkthrough';

const Walkthrough = () => {
  return (
    <View style={styles?.root}>
      <WalkthroughScreen />
    </View>
  );
};

export default Walkthrough;
