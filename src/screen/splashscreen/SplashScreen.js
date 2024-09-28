import { ActivityIndicator, Image, StatusBar, StyleSheet, Text, useAnimatedValue, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(() => {
      navigation.replace('Login')
    }, 3000);
  })
  return (
    <View style={styles.container}>
    <StatusBar barStyle={'light-content'} backgroundColor={'white'}/>
    <Image source={require('../../asset/Disambi.png')}
           style={styles.logo}
           />
    {/* <ActivityIndicator size={'large'} color={'white'} style={styles.loading}/> */}
      {/* <Text style={styles.text}>CNN</Text> */}
    </View>
  )
}

export default SplashScreen

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