import React, {useEffect, useRef} from 'react';
import {View, Image, Text, Animated} from 'react-native';
import GetStyles from './styles';
import {useSelector} from 'react-redux';
import _ from 'lodash';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const SplashScreen = () => {
  const styles = GetStyles();
  const navigation = useNavigation();
  const ReduxVal = useSelector(state => state.user);
  const {t} = useTranslation(); // ✅ Hook used here
  // Animated values
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {}, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      let targetRoute = 'Walkthrough'; // Default

      if (ReduxVal?.walkthroughBool) {
        if (!_.isEmpty(ReduxVal?.email)) {
          targetRoute = 'Home'; // walkthrough done & user logged in
        } else {
          targetRoute = 'Login'; // walkthrough done, no login
        }
      }

      navigation.reset({
        index: 0,
        routes: [{name: targetRoute}],
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, [ReduxVal]);

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <View style={styles.imageBox}>
        <Image
          source={require('../../assets/svg/image2.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.subtitle}>{t('title')}</Text>
        <Text style={styles.title}>
          <Text style={styles.bold}>{t('title1')}</Text>. {t('title2')}{' '}
          <Text style={styles.highlight}>{t('title3')}</Text>
        </Text>
      </View>
    </Animated.View>
  );
};

export default SplashScreen;
