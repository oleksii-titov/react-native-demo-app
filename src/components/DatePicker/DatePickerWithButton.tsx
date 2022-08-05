import React, {useEffect} from 'react';
import DatePicker from 'react-native-datepicker';
import {useDispatch, useSelector} from 'react-redux';
import {setBirthdayDate} from '../../redux/user';
import {LogBox} from 'react-native';

export const DatePickerWithButton = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  const userData = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();

  return (
    <DatePicker
      locale={'en'}
      style={{width: '100%'}}
      date={userData.birthdayDate}
      mode="date"
      placeholder="Select your birth date"
      format="DD-MM-YY"
      minDate="1900-01-01"
      maxDate={new Date()}
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      iconSource={require('../../assets/calendar.png')}
      customStyles={{
        dateIcon: {
          position: 'absolute',
          width: 25,
          height: 25,
          right: 15,
          top: 15,
          opacity: 0.5,
        },
        dateText: {
          fontWeight: '500',
          marginLeft: 0,
          paddingLeft: 0,
          textAlign: 'left',
        },
        dateInput: {
          marginTop: 20,
          height: 60,
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
        },
        placeholderText: {
          color: '#6F6F6F',
          marginLeft: 12,
          alignSelf: 'baseline',
        },
      }}
      onDateChange={(selectedDate: string) => {
        dispatch(setBirthdayDate({birthdayDate: selectedDate}));
      }}
    />
  );
};
