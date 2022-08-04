import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Screens} from '../screens';

const Home = ({navigation}: any) => {
  const onPress = () => {
    navigation.navigate(Screens.USER_DATA);
  };

  return (
    <>
      <View style={styles.welcomeTextViewContainer}>
        <Text style={styles.welcomeText}>Hello</Text>
      </View>
      <SafeAreaView>
        <TouchableOpacity
          style={styles.startBtn}
          onPress={onPress}
          activeOpacity={0.2}>
          <Text style={styles.startBtnText}>Start</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Home;
