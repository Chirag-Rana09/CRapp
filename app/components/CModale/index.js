import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const {width} = Dimensions.get('window');

const CModal = ({visible, message = 'Sign in Successful!', onRequestClose}) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.circleIcon}>
            <Icon name="check" size={30} color="#fff" />
          </View>
          <Text style={styles.successText}>{message}</Text>
          <Text style={styles.desc}>
            Please wait, You will be directed to the homepage.
          </Text>
          <ActivityIndicator
            size="large"
            color="#3D5CFF"
            style={{marginTop: 20}}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: width * 0.75,
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
  },
  circleIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#3D5CFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  successText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E1E2F',
    textAlign: 'center',
  },
  desc: {
    fontSize: 13,
    textAlign: 'center',
    color: '#888',
    marginTop: 5,
    paddingHorizontal: 5,
  },
});

export default CModal;
