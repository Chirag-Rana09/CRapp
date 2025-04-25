import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // or FontAwesome

const CButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles.content}>
        <Text style={styles.text}>{title}</Text>
        <Icon name="arrow-forward" size={18} color="#fff" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3C2E83', // purple shade
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    marginRight: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  icon: {
    marginTop: 1,
  },
});

export default CButton;
