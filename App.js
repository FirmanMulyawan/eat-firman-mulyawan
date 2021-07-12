import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import {enableScreens} from 'react-native-screens';
//
import AppNavigator from './src/navigation/router';

enableScreens();
const App = () => {
  const navigationRef = React.createRef();

  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor="#000"
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
