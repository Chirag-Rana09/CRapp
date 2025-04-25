import {StyleSheet} from 'react-native';

const Styles = colors =>
  StyleSheet.create({
    tabContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 15,
    },
    iconWrapper: {
      padding: 10,
      borderRadius: 30,
    },
    glow: {
      backgroundColor: colors?.primary,
      shadowColor: colors?.red,
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.5,
      shadowRadius: 8,
      borderRadius: 10,
      elevation: 8,
    },
    label: {
      fontSize: 12,
      color: colors?.primary,
      fontWeight: 'bold',
      marginTop: 4,
    },
    underline: {
      width: 20,
      height: 3,
      backgroundColor: colors?.primary,
      borderRadius: 10,
      marginTop: 6,
    },
  });

export default Styles;
