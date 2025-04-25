import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CInput = ({
  label,
  iconName,
  error,
  value,
  onChangeText,
  onBlur,
  secureTextEntry,
  keyboardType = 'default',
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputWrapper, error && styles.errorBorder]}>
        {iconName && (
          <Icon name={iconName} size={18} color="#999" style={styles.icon} />
        )}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize="none"
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {marginBottom: 20},
  label: {marginBottom: 5, color: '#333', fontSize: 14},
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.2,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  input: {flex: 1, height: 45, fontSize: 14, color: '#000'},
  icon: {marginRight: 8},
  errorText: {color: '#D00', marginTop: 5, fontSize: 12},
  errorBorder: {borderColor: '#D00', backgroundColor: '#ffe6e6'},
});

export default CInput;
