import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  startBtn: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    alignItems: 'center',
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
  },
  welcomeTextWithData: {
    fontSize: 20,
    margin: 20,
  },
  verifiedIcon: {
    width: 200,
    height: 200,
    marginBottom: 100,
  },
});

export default styles;
