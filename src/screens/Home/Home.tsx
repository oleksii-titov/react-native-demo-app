import React from 'react';
import {Screens} from '../screens';
import {useDispatch, useSelector} from 'react-redux';
import {initialState, reset} from '../../redux/user';
import {WelcomeText} from '../../components/WelcomeText/WelcomeText';
import {NextButton} from '../../components/NextButton/NextButton';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.userData);
  const hasUserData: boolean =
    !!userData.firstName &&
    !!userData.lastName &&
    !!userData.phone &&
    !!userData.email &&
    !!userData.birthdayDate;

  const onPress = () => {
    if (!hasUserData) {
      navigation.navigate(Screens.USER_DATA);
    }
    dispatch(reset(initialState));
  };

  return (
    <>
      <WelcomeText hasUserData={hasUserData} />
      <NextButton hasUserData={hasUserData} onPress={onPress} />
    </>
  );
};

export default Home;
