import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Screens} from '../screens';

export const Congrats = ({navigation}: any) => {
  const onPress = () => {
    navigation.navigate(Screens.HOME);
  };
  return (
    <>
      <Image
        source={require('../../assets/congrats.png')}
        style={styles.congratsImg}
      />
      <Text style={styles.congratsText}>
        {"You're all set!" + '  '}
        <Image source={require('../../assets/check.png')} />
      </Text>
      <TouchableOpacity style={styles.completeBtn} onPress={onPress}>
        <Text style={styles.completeBtnText}>Complete</Text>
      </TouchableOpacity>
    </>
  );
};
