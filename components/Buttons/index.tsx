import React, {FC} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';

type Props = {
  onPress: () => void;
  title: string;
};

const ButtonPrimary: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableHighlight
      style={styles.buttonContainer}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles.buttonViewContainer}>
        <Text style={styles.buttonTextPrimary}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export {ButtonPrimary};

const styles = StyleSheet.create({
  buttonViewContainer: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonTextPrimary: {
    textAlign: 'center',
    width: 200,
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
  },
});
