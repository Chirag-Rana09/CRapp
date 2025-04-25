import {StyleSheet} from 'react-native';

const Style = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    box: {
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: '500',
      color: '#999',
      marginTop: 20,
      marginBottom: 10,
    },
    item: {
      paddingVertical: 14,
      borderBottomWidth: 0.5,
      borderColor: '#e0e0e0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    itemText: {
      fontSize: 16,
      color: colors.text,
    },
    destructive: {
      color: 'red',
    },
  });

export default Style;
