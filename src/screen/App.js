import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screen/splashscreen/SplashScreen'
import Login from '../screen/login/Login';
import Home from '../screen/home/Home'


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>{/* Rest of your app code */}
       <Stack.Navigator        screenOptions={{
          headerShown: false,
          statusBarColor: '#1e42a0',
          // statusBarTranslucent: true,
        }}>
         <Stack.Screen name="SplashScreen" component={SplashScreen}/>
         <Stack.Screen name="Login" component={Login}/>
         <Stack.Screen name="Home" component={Home}/>
       </Stack.Navigator>
 </NavigationContainer>
  );
}