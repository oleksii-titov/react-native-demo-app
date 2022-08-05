import styles from '../../screens/Home/styles';
import {Image, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

type WelcomeTextProps = {
  hasUserData: boolean;
};

export const WelcomeText = (props: WelcomeTextProps) => {
  const userData = useSelector((state: any) => state.userData);

  return (
    <View style={styles.welcomeTextViewContainer}>
      {props.hasUserData ? (
        <>
          <Image
            source={require('../../assets/user.png')}
            style={styles.verifiedIcon}
          />
          <Text style={styles.welcomeTextWithData}>
            <Text>{'Hey there '}</Text>
            <Text style={{fontWeight: 'bold'}}>
              {`${userData.firstName} ${userData.lastName}`}
            </Text>
            <Text>, hope you're doing well. </Text>
            <Text>{`We remember that on ${userData.birthdayDate} is your birthday! `}</Text>
            <Text>Don't forget to check your inbox in </Text>
            <Text style={{fontWeight: 'bold'}}>{`${userData.email} `}</Text>
            <Text>and incoming messages on your phone number </Text>
            <Text style={{fontWeight: 'bold'}}>{`${userData.phone}.`}</Text>
          </Text>
        </>
      ) : (
        <View style={styles.welcomeTextViewContainer}>
          <Text style={styles.welcomeText}>Hello</Text>
        </View>
      )}
    </View>
  );
};
