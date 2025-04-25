import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import createStyles from './style';
import CHeader from '../../components/CHeader';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/slices/appSlices';
import {t} from 'i18next';

const Setting = () => {
  const {colors} = useTheme();
  console.log('colors ￠===== ⚛️ )', colors);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const styles = createStyles(colors);

  const ListItem = ({title, onPress, isDestructive}) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={[styles.itemText, isDestructive && styles.destructive]}>
        {title}
      </Text>
      <Icon
        name="chevron-forward"
        size={18}
        color={isDestructive ? 'red' : '#999'}
      />
    </TouchableOpacity>
  );

  const mess = () => {
    Alert.alert('Coming Soon....!');
  };

  return (
    <View style={styles.container}>
      <CHeader title={t('setting')} onBackPress={() => navigation.goBack()} />
      <View style={styles.box}>
        <ScrollView>
          <Text style={styles.sectionTitle}>{t('general')}</Text>
          <ListItem
            title={t('personalInfo')}
            onPress={() => {
              navigation.navigate('Profile');
            }}
          />
          <ListItem
            title={t('change_language')}
            onPress={() => {
              navigation.navigate('ChangeLanguage');
            }}
          />

          <Text style={styles.sectionTitle}>{t('about')}</Text>
          <ListItem
            title={t('privacyPolicy')}
            onPress={() => {
              navigation.navigate('Privacy Policy');
              mess();
            }}
          />
          <ListItem
            title={t('termsAndCondition')}
            onPress={() => {
              // navigation.navigate('');
              mess();
            }}
          />

          <ListItem
            title={t('deleteAcc')}
            isDestructive
            onPress={() => {
              // navigation.navigate('');
              mess();
            }}
          />
          <ListItem
            title={t('logout')}
            isDestructive
            onPress={() => {
              dispatch(logout()); // Clear all user-related data
              navigation.reset({
                index: 0,
                routes: [{name: 'Login'}], // or 'SplashScreen' if walkthrough needs to run again
              });
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Setting;
