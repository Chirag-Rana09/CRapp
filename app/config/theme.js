/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Appearance, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {BaseToast} from 'react-native-toast-message';

const commonColors = {
  red: '#E94235',
  errorColor: '#FF4949',
  green: '#34A853',
  orange: '#FF981F',
  yellow: '#F4C430',
  primary: '#24245A',
  primaryLight: '#EFEFFF',
  secondary: '#007BFF',
  accent: '#032CFF',
  darkGrey: '#757575',
  lightBlue: '#B6F6FF',
};

export const lightColors = {
  ...commonColors,
  primaryFont: '#212121',
  secondFont: '#4E4E4E',
  thirdFont: '#6F6F6F',
  lightGrey: '#F5F5F5',
  black1: '#111111',
  black2: '#222222',
  border: '#E0E0E0',
  lightRed: '#FFEDED',

  borderColor: '#E0E0E0',
  inputLabel: '#111125',
  inputBackGround: '#F5F5F5',
  textColor: '#212121',
  thirdFontBlack: '#6F6F6F',
  lightWhite: '#FAFAFA',
  white: '#FFFFFF',
  grey: '#F5F5F5',
  border: '#E0E0E0',
  placeholder: '#616161',
  buttonLabel: '#FFFFFF',
  black: '#212121',
  borderOfDate: '#E0E0E0',
  disableDate: '#E0E0E0',
  modalBackGround: '#FFFFFF',
  tabBorder: '#F5F5F5',
  modalBorder: '#F5F5F5',
  secondPrimary: '#E6F2FF',
  newBorder: '#EEEEEE',
  emptyComponent: '#E6F2FF',
  emptyComponentIcon: '#212121',
  whiteBtn: '#E6F2FF',
};

export const darkColors = {
  ...commonColors,
  accent: '#032CFF',
  borderColor: '#616161',
  inputLabel: '#E0E0E0',
  mainFontBlack: '#FFFFFF',
  secondFontBlack: '#E0E0E0',
  inputBackGround: '#424242',
  textColor: '#FFFFFF',
  thirdFontBlack: '#E0E0E0',
  lightWhite: '#424242',

  white: '#212121',
  grey: '#424242',
  border: '#E0E0E0',
  placeholder: '#FFFFFF',
  buttonLabel: '#FFFFFF',
  black: '#FFFFFF',
  borderOfDate: '#E0E0E0',
  disableDate: '#424242',
  modalBackGround: '#616161',
  tabBorder: '#F5F5F5',
  modalBorder: '#616161',
  secondPrimary: '#616161',
  newBorder: '#616161',
  emptyComponent: '#FFF0',
  emptyComponentIcon: '#057FFF',
  whiteBtn: '#424242',
};

export const FontFamily = {
  regular: 'BagossStandard-Regular',
  medium: 'BagossStandard-Medium',
  semiBold: 'BagossStandard-SemiBold',
  bold: 'BagossStandard-Bold',
  interRegular: 'Inter-Regular',
  interMedium: 'Inter-Medium',
  interSemiBold: 'Inter-SemiBold',
  interBold: 'Inter-Bold',
};

export const FontSize = {
  F32: 32,
  F30: 30,
  F28: 28,
  F26: 26,
  F24: 24,
  F22: 22,
  F20: 20,
  F18: 18,
  F16: 16,
  F14: 14,
  F12: 12,
  F10: 10,
  F8: 8,
};

export const GetTypography = () => {
  const {colors} = useTheme();
  const themeColors = colors;
  return StyleSheet.create({
    header: {
      fontFamily: FontFamily.medium,
      fontSize: FontSize.F24,
    },
    pageTitle: {
      fontFamily: FontFamily.semiBold,
      fontSize: 23,
    },
    descriptionTitle: {
      fontFamily: FontFamily.regular,
      fontSize: FontSize.F14,
    },
    descriptionText: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSize.F18,
    },
    infoText: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSize.F16,
    },
    screenHeaderText: {
      fontSize: FontSize.F28,
      fontFamily: FontFamily.bold,
      color: themeColors.textColor,
      lineHeight: 51,
    },
    screenDescriptionText: {
      fontSize: FontSize.F16,
      fontFamily: FontFamily.regular,
      color: themeColors.thirdFontBlack,
      lineHeight: 28,
    },
    iconTitle: {
      fontFamily: FontFamily.medium,
      fontSize: FontSize.F14,
      color: themeColors.mainFontBlack,
    },
    formLabel: {
      color: themeColors.inputLabel,
      fontFamily: FontFamily.medium,
      fontSize: FontSize.F16,
    },
    buttomLabel: {
      fontFamily: FontFamily.semiBold,
      fontSize: FontSize.F16,
    },
    CInputText: {
      color: themeColors.mainFontBlack,
      fontSize: FontSize.F16,
      fontFamily: FontFamily.semiBold,
    },
    comingSoon: {
      fontSize: FontSize.F26,
      fontFamily: FontFamily.semiBold,
    },
    semiTitle: {
      fontSize: FontSize.F20,
      fontFamily: FontFamily.bold,
      color: themeColors.mainFontBlack,
    },
    viewAll: {
      fontSize: FontSize.F16,
      fontFamily: FontFamily.bold,
      color: themeColors.primary,
    },
    lastUpdatedAt: {
      fontSize: FontSize.F18,
      fontFamily: FontFamily.semiBold,
      color: themeColors.secondFontBlack,
    },
    detailsText: {
      fontSize: FontSize.F16,
      fontFamily: FontFamily.interRegular,
      color: themeColors.secondFontBlack,
    },
  });
};

export const ToastConfig = () => {
  const colorScheme = Appearance.getColorScheme();
  const {theme, darkmode} = useSelector(state => state.auth);
  const isDarkMode =
    theme == 'systemDefault' ? colorScheme == 'dark' : darkmode;
  const themeColors = isDarkMode ? darkColors : lightColors;
  return {
    /*
          Overwrite 'success' type,
          by modifying the existing `BaseToast` component
        */
    success: props => (
      <BaseToast
        {...props}
        text1="Success"
        style={{borderLeftColor: themeColors.green, marginTop: 25}}
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: `${themeColors.green}20`,
          borderWidth: 1,
          borderColor: `${themeColors.green}50`,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
        text1Style={{
          fontSize: FontSize.F14,
          fontWeight: null,
          fontFamily: FontFamily.semiBold,
        }}
        text2NumberOfLines={2}
        text2Style={{
          fontSize: FontSize.F12,
          fontFamily: FontFamily.regular,
        }}
      />
    ),
    /*
      Overwrite 'inf' type,
      by modifying the existing `BaseToast` component
    */
    info: props => (
      <BaseToast
        {...props}
        text1="Information!"
        style={{borderLeftColor: themeColors.primary, marginTop: 25}}
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: `${themeColors.primary}20`,
          borderWidth: 1,
          borderColor: `${themeColors.primary}50`,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
        text1Style={{
          fontSize: FontSize.F14,
          fontWeight: null,
          fontFamily: FontFamily.semiBold,
        }}
        text2NumberOfLines={2}
        text2Style={{
          fontSize: FontSize.F12,
          fontFamily: FontFamily.regular,
        }}
      />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `BaseToast` component
    */
    error: props => (
      <BaseToast
        {...props}
        text1="Oops!"
        style={{borderLeftColor: themeColors.red, marginTop: 25}}
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: `${themeColors.red}20`,
          borderWidth: 1,
          borderColor: `${themeColors.red}50`,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
        text1Style={{
          fontSize: FontSize.F14,
          fontWeight: null,
          fontFamily: FontFamily.semiBold,
        }}
        text2Style={{
          fontSize: FontSize.F12,
          fontFamily: FontFamily.regular,
        }}
        text2NumberOfLines={2}
      />
    ),
    /*
      Create new type 'white',
      by modifying the existing `BaseToast` component
    */
    white: props => (
      <BaseToast
        {...props}
        style={{
          marginTop: 70,
          width: '30%',
          borderLeftWidth: 0,
          borderRadius: 12,
          backgroundColor: themeColors.modalBackGround,
        }}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        text1NumberOfLines={1}
        text1Style={{
          fontSize: FontSize.F16,
          fontWeight: null,
          textAlign: 'center',
          fontFamily: FontFamily.semiBold,
          color: themeColors.mainFontBlack,
        }}
        text2Style={{
          display: 'none',
        }}
      />
    ),
  };
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
};
