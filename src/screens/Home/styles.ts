import {StyleSheet} from 'react-native';
// import {Colors} from 'react-native-ui-lib/src';

const styles = StyleSheet.create({
  startBtn: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    alignItems: 'center',
    // backgroundColor: Colors.orange30,
    backgroundColor: 'orange',
    padding: 10,
    height: 63,
  },
  startBtnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  welcomeTextViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 40,
    fontFamily: 'Trebuchet MS',
  },
});

export default styles;
