import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type NextButtonProps = {
  hasUserData: boolean;
  onPress: () => void;
};

export const NextButton = (props: NextButtonProps) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.startBtn}
        onPress={props.onPress}
        activeOpacity={0.2}>
        <Text style={styles.startBtnText}>
          {props.hasUserData ? 'Forget me' : 'Start'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
