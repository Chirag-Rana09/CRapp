import React from 'react';
import {View, Text} from 'react-native';
import Style from './styles';
import {useNavigation, useTheme} from '@react-navigation/native';
import CStatusBar from '../../components/CStatusBar';
import CHeader from '../../components/CHeader';
import {t} from 'i18next';
import AnimatedView from '../../components/AnimatedView';

export default function Service() {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const styles = Style(colors);
  return (
    <AnimatedView>
      <View style={styles.root}>
        <CHeader
          hideBackBtn
          title={t('Service')}
          onBackPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.box}>
          <Text style={{fontFamily: 'Saira'}}>Service Screen</Text>
        </View>
      </View>
    </AnimatedView>
  );
}
