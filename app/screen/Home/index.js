import React from 'react';
import {View, Text} from 'react-native';
import Style from './style';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import CButton from '../../components/CButton';
import {useNavigation, useTheme} from '@react-navigation/native';
import CStatusBar from '../../components/CStatusBar';
import AnimatedView from '../../components/AnimatedView';

export default function Home() {
  const {colors} = useTheme();
  const getStyle = Style(colors);
  const navigation = useNavigation();
  const FontFamily = {bold: 'Saira-Bold'};
  const user = useSelector(state => state.user);
  const {t} = useTranslation();

  return (
    <AnimatedView>
      <View style={getStyle.root}>
        <CStatusBar />
        <Text style={{fontFamily: FontFamily.bold}}>Home Screen</Text>
        <Text style={{fontSize: 24}}>
          {t('welcome')} {user?.name}
        </Text>
        <CButton
          title="Let's Go!"
          onPress={() => {
            // navigation.navigate('ChangeLanguage');
          }}
        />
      </View>
    </AnimatedView>
  );
}
