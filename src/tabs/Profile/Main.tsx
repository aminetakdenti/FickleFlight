import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import CovidSvg from '../../assets/icons/covid.svg';
import LogoutSvg from '../../assets/icons/logout.svg';
import PaymentSvg from '../../assets/icons/payment.svg';
import QuestionSvg from '../../assets/icons/question.svg';
import ReferralSvg from '../../assets/icons/referral.svg';
import SettingsSvg from '../../assets/icons/settings.svg';
import {RowSection} from '../../components';
import {black, darkBlue, grey, white} from '../../constant';

export const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.mainImage}>
          <Image
            style={styles.image}
            source={require('../../assets/images/profile.png')}
          />
        </View>

        <View style={styles.mainHeader}>
          <Text style={styles.mainHeaderText}>Profile</Text>
          <Text style={{color: grey}}>Baguio, Philippines</Text>
        </View>

        <Text style={{color: black}}>
          I like the beach, mountains, forest and everything about nature! :)
        </Text>

        <View style={styles.line} />

        <View style={styles.profileOption}>
          <RowSection>
            <PaymentSvg />
            <Text style={styles.profileOptionText}>Payment Details</Text>
          </RowSection>
          <RowSection>
            <CovidSvg />
            <Text style={styles.profileOptionText}>Covid Advisory</Text>
          </RowSection>
          <RowSection>
            <ReferralSvg />
            <Text style={styles.profileOptionText}>Referral Code</Text>
          </RowSection>
          <RowSection>
            <SettingsSvg />
            <Text style={styles.profileOptionText}>Settings</Text>
          </RowSection>
          <RowSection>
            <LogoutSvg />
            <Text style={styles.profileOptionText}>Logout</Text>
          </RowSection>
          <View style={styles.profileQuestionContainer}>
            <QuestionSvg />
            <Text style={styles.profileQuestion}>
              Have questions? We are here to help
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: 42,
  },
  main: {
    flex: 1,
    backgroundColor: white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 43,
    paddingHorizontal: 16,
    gap: 16,
  },
  mainImage: {
    width: 84.12,
    height: 84.12,
    backgroundColor: white,
    borderRadius: 42.06,
    borderWidth: 3,
    borderColor: white,
    position: 'absolute',
    top: -42,
    left: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  mainHeader: {gap: 10},
  mainHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: black,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#E6E9F0',
  },
  profileOption: {
    width: '100%',
    alignItems: 'flex-start',
    gap: 20,
  },
  profileOptionText: {
    fontSize: 16,
    color: black,
    lineHeight: 24,
  },
  profileQuestionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#EAF5FF',
    borderRadius: 7,
    gap: 8,
  },
  profileQuestion: {
    color: darkBlue,
    lineHeight: 24,
  },
});
