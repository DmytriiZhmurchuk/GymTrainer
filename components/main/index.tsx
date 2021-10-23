import React, {FC} from 'react';
import {View, Text, Button, StyleSheet, TouchableHighlight} from 'react-native';
import {ButtonPrimary} from '../buttons';
//mport {NavigationFunctionComponent} from 'react-native-navigation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from 'react-native-navigation';

const HomeScreen: FC = () => {
  const navigation = useNavigation();
  const navigateToClientsList = () => {
    //navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ButtonPrimary title="Clients" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonPrimary title="Exercises" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonPrimary title="Activities" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 30,
  },
});

export default HomeScreen;
