import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {Screens} from '../screens';
import {useDispatch, useSelector} from 'react-redux';
import {setEmail, setFirstName, setLastName, setPhone} from '../../redux/user';
import {TextInput} from 'react-native-paper';
import {DatePickerWithButton} from '../../components/DatePicker/DatePickerWithButton';

const UserData = ({navigation}: any) => {
  const userData = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();

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
          onChangeText={value => dispatch(setFirstName({firstName: value}))}
          activeUnderlineColor={'#90c4a1'}
          style={styles.input}
          value={userData.firstName}
        />
        <TextInput
          placeholder="Last name"
          autoCapitalize="sentences"
          onChangeText={(value: string) =>
            dispatch(setLastName({lastName: value}))
          }
          activeUnderlineColor={'#90c4a1'}
          style={styles.input}
          value={userData.lastName}
        />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(value: string) => dispatch(setEmail({email: value}))}
          activeUnderlineColor={'#90c4a1'}
          style={styles.input}
          value={userData.email}
        />
        <TextInput
          placeholder="Phone"
          autoCapitalize="none"
          onChangeText={(value: string) => dispatch(setPhone({phone: value}))}
          activeUnderlineColor={'#90c4a1'}
          style={styles.input}
          value={userData.phone}
        />
        <DatePickerWithButton />
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
