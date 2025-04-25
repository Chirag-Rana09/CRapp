import React from 'react';
import {View, Text} from 'react-native';
import Style from './styles';
import {useNavigation, useTheme} from '@react-navigation/native';
import CHeader from '../../components/CHeader';
import {t} from 'i18next';

export default function Profile() {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const styles = Style(colors);
  return (
    <View style={styles.root}>
      <CHeader
        title={t('Profile')}
        onBackPress={() => navigation.goBack()}
        rightIconName="settings-outline"
        onRightPress={() => {
          navigation.navigate('Setting');
        }}
      />
      <View style={styles.box}>
        <Text>Profile Screen</Text>
      </View>
    </View>
  );
}
