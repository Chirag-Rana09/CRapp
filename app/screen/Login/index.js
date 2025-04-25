import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import CInput from '../../components/CInput';
import Icon from 'react-native-vector-icons/Fontisto';
import CModal from '../../components/CModale';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setUserData} from '../../redux/slices/appSlices';
import {t} from 'i18next';

const Login = () => {
  const [email, setEmail] = useState('chirag@mail.com');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [password, setPassword] = useState('123456');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email.includes('@')) {
      newErrors.email = 'Invalid email, Re-enter.';
    }
    if (!password) {
      newErrors.password = 'Password is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      // perform login
      console.log({email, password});
      setModalVisible(true);
      dispatch(
        setUserData({
          email: email,
          password: password,
        }),
      );
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('Home'); // Or wherever needed
      }, 3000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.heading}>{t('hello')}</Text>
        <Text style={styles.subtext}>{t('info')}</Text>

        <CInput
          label="Email"
          iconName="mail"
          value={email}
          onChangeText={setEmail}
          error={errors.email}
          keyboardType="email-address"
        />
        <CInput
          label="Password"
          iconName="lock"
          value={password}
          onChangeText={setPassword}
          error={errors.password}
          secureTextEntry
        />
        <View style={styles.row}>
          <View style={styles.checkboxWrapper}>
            <TouchableOpacity
              onPress={() => {
                setRemember(!remember);
              }}>
              <Icon
                name={remember ? 'checkbox-active' : 'checkbox-passive'}
                size={18}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.rememberText}>{t('rememberMe')}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Coming Soon....');
            }}>
            <Text style={styles.forgot}>{t('forgotPass')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.box2}>
          <Text style={styles.terms}>{t('title4')} </Text>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Coming Soon....');
            }}>
            <Text style={styles.link}>{t('termsOfCon')} </Text>
          </TouchableOpacity>
          <Text style={styles.terms}>{t('and')} </Text>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Coming Soon....');
            }}>
            <Text style={styles.link}>{t('privacyPolicy')}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>{t('login')}</Text>
        </TouchableOpacity>
      </View>
      <CModal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      />
      ;
    </View>
  );
};

export default Login;
