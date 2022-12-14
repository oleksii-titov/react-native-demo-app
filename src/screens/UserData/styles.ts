import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 14,
    fontWeight: '500',
    color: 'gray',
    textAlign: 'center',
  },
  submitBtn: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    height: 60,
  },
  submitBtnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  input: {
    fontSize: 14,
    backgroundColor: '#F2F2F2',
  },
});

export default styles;
