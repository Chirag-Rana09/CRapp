import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Style from './styles';
import {useTheme} from '@react-navigation/native';

const CHeader = ({
  title = '',
  onBackPress,
  rightIconName,
  onRightPress,
  showBack = true,
  rightIconSize = 20,
  iconColor = '#000',
}) => {
  const {colors} = useTheme();
  const styles = Style(colors);
  return (
    <View style={styles.container}>
      {showBack ? (
        <TouchableOpacity onPress={onBackPress} style={styles.iconBox}>
          <Icon
            name="arrow-back-outline"
            size={24}
            color={colors?.textColor || iconColor}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconBox} />
      )}

      <Text style={styles.title}>{title}</Text>

      {rightIconName ? (
        <TouchableOpacity onPress={onRightPress} style={styles.iconBox}>
          <Icon
            name={rightIconName}
            size={rightIconSize}
            color={colors?.textColor || iconColor}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconBox} />
      )}
    </View>
  );
};

export default CHeader;
