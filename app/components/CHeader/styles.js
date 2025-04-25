import {StyleSheet} from 'react-native';

const Style = colors =>
  StyleSheet.create({
    container: {
      height: 100,
      paddingTop: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      backgroundColor: colors?.white,
    },
    iconBox: {
      width: 30,
      alignItems: 'center',
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#000',
    },
  });

export default Style;
