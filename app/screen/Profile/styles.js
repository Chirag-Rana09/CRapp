import {StyleSheet} from 'react-native';

const Style = colors =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: colors?.white,
      // paddingTop: 50,
      // paddingHorizontal: 20,
    },
    box: {
      paddingHorizontal: 20,
    },
  });

export default Style;
