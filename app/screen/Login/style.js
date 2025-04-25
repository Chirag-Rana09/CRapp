import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    backgroundColor: '#F8F8F8',
  },
  heading: {fontSize: 24, fontWeight: '600', marginBottom: 10},
  subtext: {fontSize: 14, color: '#777', marginBottom: 20},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box1: {paddingVertical: 50},
  box2: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 50,
  },
  icon: {
    paddingRight: 5,
  },
  checkboxWrapper: {flexDirection: 'row', alignItems: 'center'},
  rememberText: {marginLeft: 5},
  forgot: {color: '#3D5CFF', fontSize: 13},
  button: {
    marginTop: 20,
    backgroundColor: '#3D5CFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontSize: 16},
  terms: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  link: {
    color: '#3D5CFF',
    fontSize: 14,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default Styles;
