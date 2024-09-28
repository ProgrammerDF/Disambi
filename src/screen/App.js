import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screen/login/Login';
// import Register from './screen/register/Register';
// import Beranda from './screen/beranda/Beranda';
import SplashScreen from '../screen/splashscreen/SplashScreen'

export default function App() {
  const Stack = createNativeStackNavigator();

  return ( 
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarColor: '#1e42a0',
          // statusBarTranslucent: true,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Beranda" component={Beranda} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React, {useState} from 'react';
// import {View, StyleSheet, Text, Button, Alert} from 'react-native';

// const App = () => {
//   const [isLamp, setIsLamp] = useState(false);

//   console.error(isLamp);
//   const handlerPressButton = () => {
//     setIsLamp(!isLamp);
//   };
//   return (
//     <View style={styles.Container}>
//       <View style={[styles.lamp]}></View>

//       <Button
//         title="saklar"
//         onPress={() => handlerPressButton()}
//         color={isLamp == true ? '#b89dfa' : 'red'}
//       />
//     </View>
//   );-``
// };

// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   lamp: {
//     height: 50,
//     width: 50,
//     borderRadius: 50,
//   },
// });

// export default App;