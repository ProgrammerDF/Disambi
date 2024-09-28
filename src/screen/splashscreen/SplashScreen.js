import { ActivityIndicator, Image, StatusBar, StyleSheet, Text, useAnimatedValue, View } from 'react-native'
import React, { useEffect } from 'react'

export default function SplashScreen({navigation}) {
  useEffect(()=>{
    setTimeout(() => {
      navigation.replace('Login')
    }, 1000);
  })
  return (
    <View style={styles.container}>
    <StatusBar Style={'light-content'} backgroundColor={'#54a0ff'}/>
        <Image source={require('../../asset/Disambi.png')}
          style={styles.logo}
        />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#white',
      alignItems:'center',
      justifyContent:'center'
  },
  logo:{
      width:100,
      height:100
  },
  text:{
      fontSize:20,
      color:'black'
  },
  loading:{
      height:100,
      width:100
  }
})