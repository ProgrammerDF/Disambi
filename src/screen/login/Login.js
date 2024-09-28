// import AsyncStorage from '@react-native-async-storage/async-storage'
// import React, { useState } from 'react'
// import {View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, TextInputComponent, TextInput, Alert } from 'react-native'

// export default function Login (navigation) {
// 	const [username,setUsername] = useState('')
// 	const [password,usePassword] =useState('')

// 	const login =() => {
// 		return fetch('https://dev-disambi.sandboxindonesia.id/api/auth/login/',{
// 			method:'POST',
// 			headers: {
// 				Accept:'aplicatin/json',
// 			'Content-Type' :  'aplicatin/json',
// 			},
// 			body: JSON.stringify({
// 				username:username,
// 				password:password
// 			}),
// 		})
// 		.then (response => response.json())
// 		.then(json => {
// 			if(json?.data){
// 				AsyncStorage.setItem('token',json?.data?.acces_token)
// 				console.log(json)
// 				navigation.navigate('Home')
// 			}
// 			else{
// 				Alert.alert(json?.message)
// 			}
// 		})
// 		.catch(error => {
// 			console.error(error);
// 		})
			
// 	}
//     return (
//         <View style={styles.container}>
//             <Image source={require('../../asset/Disambi.png')}
// 				style={styles.logo}
// 			/>
// 			<Text style={styles.text}>DISAMBI</Text>
// 			<View>
// 				<Text style={styles.text1}>Username</Text>
// 				<View style={styles.Input}>
// 				<TextInput style={{color:'black', marginLeft:10}} placeholder='Masukkan Username' placeholderTextColor={"gray"} value={username} onChangeText={text => setUsername(text)}/>
// 		    	</View>
// 			</View>
			
// 			<View>
// 				<Text style={styles.text1}>Password</Text>
// 				<View style={styles.Input}>
// 				<TextInput style={{color:'black', marginLeft:10}} placeholder='Masukkan Password' placeholderTextColor={"gray"} value={password} onChangeText={text => usePassword(text)}/>
// 		    	</View>
// 			</View>
// 			<TouchableOpacity style={styles.Login} onPress={() => login()}>
// 				<Text  style={styles.text2}>Login</Text>
// 			</TouchableOpacity>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
// 	container:{
// 		flex:1,
// 		backgroundColor:'white',
// 		alignItems:'center',
// 		justifyContent:'center'
// 	},
// 	logo:{
// 		width:100,
// 		height:100
// 	},
// 	text:{
// 		fontSize:25,
// 		fontWeight:'bold',
// 		color:'black',
// 		marginBottom:20
// 	},
// 	text2:{
// 		fontSize:15,
// 		fontWeight:'semibold',
// 		color:'white',
// 	},
// 	text1:{
// 		color:'black', 
// 		fontSize:15, 
// 		marginBottom:5,
// 		fontWeight:'semibold'
// 	},
// 	Input:{
// 		borderRadius:5, 
// 		borderColor:'silver',
// 		borderWidth:1,
// 		height:45, 
// 		width:350,
		
// 	},
// 	Login:{
// 		backgroundColor:'#0076d6',
// 		alignItems:'center',
// 		justifyContent:'center',
// 		borderRadius:5, 
// 		borderColor:'silver',
// 		height:45, 
// 		width:350,
// 		marginTop:20
// 	}
// })			

import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import {View,Text, TextInput, Button, Alert, TouchableOpacity,Image} from 'react-native'

const Login = ({navigation}) => {
	const [username,setUsername] = useState('')
	const [password,setPassword] = useState('')
	const [isLamp, setIsLamp] = useState(false)
	const [isMata, setMata] = useState(true)
    
	const handlerPressButton =() => {
		setIsLamp(!isLamp)
	}
    
	const mata =() => {
		setMata(!isMata)

	}
	const login = () => {
		return fetch('https://dev-disambi.sandboxindonesia.id/api/auth/login/',{
			method: 'POST',
			headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username:username,
				password:password
			  }),
			
		  })
		.then(response => response.json())
		.then(json => {
			if(json?.data){
				AsyncStorage.setItem('token', json?.data?.acces_token);
				console.log(json)
				navigation.navigate('Home')

			}
			else{
				Alert.alert(json?.message)
			}
		})
		.catch(error => {
		console.error(error);
		});
	}

	
	return (
		<View style={{flex:1, backgroundColor:'white', alignItems:'center',justifyContent:'center'}}>
		<Image source={require('../../asset/Disambi.png')} style={{height:100,width:100}}/>
		<Text style={{color:'black', fontSize:25, fontWeight:'500',marginBottom:20}}>DISAMBI</Text>
		<View>
			<Text style={{color:'black', fontSize:15, marginBottom:5,fontWeight:'semibold'}}>Username</Text>
			<View  style={{color:'black',marginBottom:15,borderRadius:5, borderColor:'silver',borderWidth:1,height:45, width:350}}>
			<TextInput style={{color:'black', marginLeft:10}} placeholder='Masukkan Username' placeholderTextColor={"gray"} value={username} onChangeText={text => setUsername(text)}/>
			</View>
		</View>
		<View>
		    <Text style={{color:'black', fontSize:15, marginBottom:5,fontWeight:'semibold'}}>Password</Text>
			<View  style={{color:'black',flexDirection:'row',alignItems:'center',marginBottom:5,borderRadius:5, borderColor:'silver',borderWidth:1,height:45, width:350}}>
			<TextInput style={{color:'black',marginLeft:10}} placeholder='Masukkan Password' placeholderTextColor={"gray"} value={password} onChangeText={text => setPassword(text)} 
				secureTextEntry={isMata}
			/>

			<TouchableOpacity onPress={() => mata()} backgroundColor ={isLamp == true ? 'white' : 'black'}>

			{isMata ? (
        <Image source={require('../../asset/hide.png')} style={{width:15,marginLeft:160, height:17}}/>
         ) :
        (
			<Image source={require('../../asset/show.png')} style={{width:15,marginLeft:170, height:17}}/>
        )}
        </TouchableOpacity>
			</View>
			<View style={{flexDirection:'row',marginBottom:20,alignItems:'center'}}>

			<TouchableOpacity onPress={() => handlerPressButton()} backgroundColor ={isLamp == true ? 'white' : 'black'}>

			{isLamp ? (
        <Image source={require('../../asset/chek.png')} style={{width:17, height:17}}/>
         ) :
        (
        <View style={{width:15, height:15,borderRadius:2, borderColor:'silver',borderWidth:1}}></View>
        )}
        </TouchableOpacity>
			  <Text style={{color:'black', fontSize:13, marginLeft:5,fontWeight:'semibold'}}>Ingatkan Saya</Text>
			</View>
		</View>

			<TouchableOpacity title='Login' onPress={() => login()} style={{height:45, width:350, backgroundColor:'#1e90ff', borderRadius:5, alignItems:'center',justifyContent:'center'}}>
				<Text style={{color:'white', fontSize:15}}> Masuk</Text>
			</TouchableOpacity>
		</View>
	)
}



export default Login
