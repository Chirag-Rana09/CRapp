import React, {useState} from 'react';
import {View, Text, TouchableOpacity, BackHandler} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setLanguage} from '../../redux/slices/appSlices'; // make sure this exists
import styles from './style';
import CHeader from '../../components/CHeader';
import {useNavigation} from '@react-navigation/native';
import {t} from 'i18next';
import RNExitApp from 'react-native-exit-app';

const ChangeLanguage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const currentLang = useSelector(state => state.user.language);
  const [selectedLang, setSelectedLang] = useState(currentLang || 'en');

  const languages = [
    {code: 'en', label: 'English'},
    {code: 'hi', label: 'Hindi'},
    {code: 'fr', label: 'French'},
    {code: 'es', label: 'Spanish'},
  ];

  const handleSelect = code => {
    setSelectedLang(code);
    dispatch(setLanguage(code));
  };

  return (
    <View style={styles.container}>
      <CHeader
        title={t('change_language')}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.box}>
        {languages.map(lang => (
          <TouchableOpacity
            key={lang.code}
            onPress={() => {
              handleSelect(lang.code);
              setTimeout(() => {
                RNExitApp.exitApp();
              }, 2000);
            }}
            style={styles.option}>
            <View style={styles.radioCircle}>
              {selectedLang === lang.code && (
                <View style={styles.selectedDot} />
              )}
            </View>
            <Text style={styles.label}>{lang.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ChangeLanguage;
