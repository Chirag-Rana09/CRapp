import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

// Define your styles within a functional component
const GetStyles = () => {
  // Access theme colors using useTheme hook
  const {colors} = useTheme();
  const BaseColors = colors;

  // Define styles using the theme colors
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 40,
      justifyContent: 'space-between',
      backgroundColor: '#fff',
    },
    imageBox: {
      marginTop: 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textBox: {
      marginTop: 20,
      paddingVertical: 30,
    },
    subtitle: {
      fontSize: 18,
      color: '#333',
      marginBottom: 8,
      textAlign: 'center',
    },
    title: {
      fontSize: 18,
      color: '#333',
    },
    bold: {
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center',
    },
    highlight: {
      fontWeight: 'bold',
      color: '#F5A623', // Orange
      textDecorationLine: 'underline',
    },
  });
};

export default GetStyles;
