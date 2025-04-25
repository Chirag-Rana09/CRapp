import {StyleSheet} from 'react-native';

const Style = colors =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: colors?.white,
    },
    box: {paddingHorizontal: 20},
  });

export default Style;
