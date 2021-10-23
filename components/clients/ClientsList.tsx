import React, {FC} from 'react';
import {View, Text, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import {ButtonPrimary} from '../buttons';
const ClientsList: FC = () => {
  return (
    <SafeAreaView>
      <View>
        <View>Add New Button</View>
        <View>
          <TextInput placeholder="Search" />
        </View>
        <View>List</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ClientsList;
