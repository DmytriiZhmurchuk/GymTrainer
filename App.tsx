import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/main';
import {
  SafeAreaView,
  // ScrollView,
  // /  StatusBar,
  StyleSheet,
  Text,
  // useColorScheme,
  View,
} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <SafeAreaView style={styles.appContainer}>
    //   <HomeScreen />

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{title: 'Home'}}
//     />
//   </Stack.Navigator>
//</NavigationContainer>
// </SafeAreaView>

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
