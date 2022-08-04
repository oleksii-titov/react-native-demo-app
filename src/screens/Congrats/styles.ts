import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  congratsText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    color: 'gray',
  },
  completeBtn: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: '#778899',
    padding: 10,
    height: 60,
  },
  completeBtnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  congratsImg: {
    width: 250,
    height: 250,
    marginTop: 200,
    alignSelf: 'center',
  },
});

export default styles;
