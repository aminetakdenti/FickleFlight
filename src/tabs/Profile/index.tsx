import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {black, darkBlue, white} from '../../constant';
import {Header} from './Header';
import {Main} from './Main';

export const ProfileScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView />
        <StatusBar />
        <ImageBackground
          source={require('../../assets/images/background.jpeg')}
          style={styles.imageBackground}
          resizeMethod="scale">
          <View style={styles.innerContainer}>
            <Header />
            <Main />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  innerContainer: {
    flex: 1,
    paddingTop: 30,
    gap: 50,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContainer: {
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
    // objectFit: 'cover',
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
