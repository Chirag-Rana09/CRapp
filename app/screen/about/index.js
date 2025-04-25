import React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import {View, Text} from 'react-native';
import Style from './styles';
import CHeader from '../../components/CHeader';
import {t} from 'i18next';
import AnimatedView from '../../components/AnimatedView';

export default function About() {
  const {colors} = useTheme();
  const styles = Style(colors);
  const navigation = useNavigation();

  return (
    <AnimatedView>
      <View style={styles.root}>
        <CHeader
          hideBackBtn
          title={t('About')}
          onBackPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.box}>
          <Text>About Screen</Text>
        </View>
      </View>
    </AnimatedView>
  );
}
