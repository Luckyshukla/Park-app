import Home from '../screen/home/Home';
import ParkingFloor from '../screen/parkingFloor/ParkingFloor';

import * as React from 'react';
import { NavigationContainer,StackActions,CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const navigationRef = React.createRef();
const routeNameRef = React.createRef();
export function rootNavigate(name, action, params = null) {
  if (action === 'navigate') {
    navigationRef.current?.navigate(name, params);
  } else if (action === 'replace') {
    navigationRef.current.dispatch(StackActions.replace(name, params));
  } else if (action === 'push') {
    navigationRef.current.dispatch(StackActions.push(name, params));
  } else if (action === 'reset') {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name, params }],
      })
    );
  } else if (action === 'back') {
    navigationRef.current?.goBack();
  }
}
const Navigation = () => {
  return (
    
    <NavigationContainer
       ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        try {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute().name;

          if (previousRouteName !== currentRouteName && !__DEV__) {
            await analytics().logScreenView({
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          }
          routeNameRef.current = currentRouteName;
        } catch (err) {}
      }}
    >
      <Stack.Navigator
       screenOptions={{
        headerShown: false,
        animation: 'none',
        gestureEnabled: 'false',
      }}
      initialRouteName={'Home'}
      >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ParkingFloor" component={ParkingFloor} />

      </Stack.Navigator>
    </NavigationContainer>

 
  
  );
};
export default Navigation;
