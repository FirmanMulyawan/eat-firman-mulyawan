import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screen/splash';
import Main from '../screen/main';
import Detail from '../screen/detail';

const {Navigator, Screen} = createStackNavigator();

const cardStyleInterpolator = ({current: {progress}}) => ({
  cardStyle: {
    opacity: progress.interpolate({
      inputRange: [0, 0.5, 0.9, 1],
      outputRange: [0, 0.25, 0.7, 1],
    }),
  },
});

const Router = () => {
  return (
      <MyStack />
  );
};

export default Router;

const MyStack =()=> {
  return (
    <Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator,
      }}>
      <Screen
        name="Splash"
        component={Splash}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}
      />
      <Screen name="Main" component={Main} />
      <Screen name="Detail" component={Detail} />
    </Navigator>
  );
}