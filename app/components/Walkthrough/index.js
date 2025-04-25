import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {setWalkthroughBool} from '../../redux/slices/appSlices';
import {useDispatch, useSelector} from 'react-redux';

const {width} = Dimensions.get('window');

const data = [
  {
    title: 'Learn Anytime',
    desc: 'Study on your own schedule, anytime and anywhere.',
    image: require('../../assets/svg/image2.png'),
  },
  {
    title: 'Track Progress',
    desc: 'Monitor your progress and achievements.',
    image: require('../../assets/svg/image2.png'),
  },
  {
    title: 'Get Certified',
    desc: 'Receive certificates and boost your career.',
    image: require('../../assets/svg/image2.png'),
  },
];

const Walkthrough = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const ReduxVal = useSelector(state => state.user);

  const scrollToIndex = index => {
    scrollViewRef.current.scrollTo({x: index * width, animated: true});
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={e => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}>
        {data.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        {currentIndex === 0 ? (
          <View />
        ) : (
          <TouchableOpacity
            onPress={() => scrollToIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
            style={[
              styles.button,
              currentIndex === 0 && styles.disabledButton,
            ]}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => {
            scrollToIndex(currentIndex + 1);
            if (currentIndex === 2) {
              if (ReduxVal?.walkthroughBool && !_.isEmpty(ReduxVal?.email)) {
                navigation.navigate('Home');
              } else {
                navigation.navigate('Login');
              }
              dispatch(setWalkthroughBool({walkthroughBool: true}));
            }
          }}
          style={[styles.button, currentIndex === data.length - 1]}>
          <Text style={styles.buttonText}>
            {currentIndex === data.length - 1 ? 'Start' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Walkthrough;
