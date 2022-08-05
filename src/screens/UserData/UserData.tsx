import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';
import {Screens} from '../screens';

const UserData = ({navigation}: any) => {
  const onPress = () => {
    navigation.navigate(Screens.CONGRATS);
  };

  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior={'automatic'}>
        <Text style={styles.title}>Please provide the data below</Text>
        <TextInput
          placeholder="First name"
          autoCapitalize="sentences"
          onEndEditing={() => console.log('onEndEditing')}
          style={styles.firstNameInput}
        />
        <TextInput
          placeholder="Last name"
          autoCapitalize="sentences"
          onChangeText={() => console.log('onChange')}
          style={styles.lastNameInput}
        />
        <TextInput
          placeholder="Your age"
          autoCapitalize="none"
          onChangeText={() => console.log('onChange')}
          style={styles.ageInput}
        />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={() => console.log('onChange')}
          style={styles.emailInput}
        />
        <TextInput
          placeholder="Phone"
          autoCapitalize="none"
          onChangeText={() => console.log('onChange')}
          style={styles.phoneInput}
        />
      </ScrollView>
      <SafeAreaView>
        <TouchableOpacity style={styles.submitBtn} onPress={onPress}>
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default UserData;
