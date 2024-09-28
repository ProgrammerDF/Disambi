// import AsyncStorage from '@react-native-async-storage/async-storage'
// import React, { useEffect, useState } from 'react'
// import {View,Text, TextInput, Button, StyleSheet, TouchableOpacity,Image} from 'react-native'

// export default function Home ({navigation}) {
//     const [data, setData] = useState([])

//     const dataDusun =() => {
//         AsyncStorage.getItem('token')
//         .then(nilai => {
//             console.log('token', nilai)
//             setLoading(true)
//             return fethh('https://dev-disambi.sandboxindonesia.id/api/dusun/',{
//                 method:'GET',
//                 header: {
//                     Accept: 'aplication/json',
//                     'Content-Type' : 'aploication/json',
//                     "Authorization": 'Bearer '+ nilai
//                 },
//             })
//             .then(response => response.json())
//             .then(json => {
//                 console.log ("data dusun", json)
//                 if(json?.data){
//                     setData(json?.data)
//                 }
//                 setLoading(false)
//             })
//             .catch(error => {
//                 console.error(error);
//                 setLoading(false)
//             });
//         })
//         .catch(err => console.error(err))
//     }

//     useEffect(() =>{
//         dataDusun()
//             const unsubscribe = navigation.addListener('focus', () => {
//                 dataDusun()
//              })
        
//     })
//     return(
//         <View style={styles.container}>
//             <View>
//                 <Image source={require('../../asset/Disambi.png')} style={styles.logo}/>
//             </View>
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
//     }
// })

import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import {View,Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native'

const Home = ({navigation}) => {
    const [theme,setTheme]=useState(true)
    const [data,setData] = useState([
       
    ])

    useEffect(() => {
        getDataDusun()
    
        })

    const getDataDusun = () => {
        AsyncStorage.getItem("token")
        .then(nilai => {
            console.log('token', nilai)
            return fetch('https://dev-disambi.sandboxindonesia.id/api/dusun/',{
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  "Authorization": 'Bearer '+ nilai
                },
                
              })
            .then(response => response.json())
            .then(json => {
                console.log("data dusun", json)
                if(json?.data){
                    setData(json?.data)
                }
                
            })
            .catch(error => {
                console.error(error);
                
            });
        })
        .catch(err => console.error(err))
    }

    useEffect(() => {
        AsyncStorage.getItem("theme")
       .then(value => {
            console.log(value)
            if(value=='1'){
                setTheme(true)
            }
            else if (value =='0') {
                setTheme(false)
            }
            else{
                return ''
            }
       } )
       .catch(error=> console.log(error))
     })
    
     const renderItem = ({item, index}) => {
        return (
            <View style={styles.header}>
             <TouchableOpacity activeOpacity={1} onPress={()=>  navigation.navigate('Login')}>
            <View style={styles.header1}>
                 <View style={styles.Tepi}></View>
                 <Image source={require('../../asset/home3.png')} style={styles.icon}/>
                 <Text style ={styles.Text1}>{item?.name}</Text>
                 <Image source={require('../../asset/slide-right.png')} style={styles.icon1}/>
            </View>
            </TouchableOpacity>
       </View>
        )
    }

    return (
        <View style={{flex:1,backgroundColor:theme ==true ? 'white': "black", alignItems:'center'}}>
            <View style={styles.header}>
                 <TouchableOpacity activeOpacity={1} onPress={()=>  navigation.navigate('Profile')}>
                     <Image source={require('../../asset/Disambi.png')} style={styles.Logo}/>
                 </TouchableOpacity>

                 <Text style ={styles.Text}>Dusun</Text>
            </View>
            <View style={{width:350, height:0.6, backgroundColor:'silver',marginTop:10}}></View>
            {/* <TouchableOpacity activeOpacity={1} onPress={()=>  navigation.navigate('Login')}>
            <View style={styles.header1}>
                 <View style={styles.Tepi}></View>
                 <Image source={require('../../asset/home3.png')} style={styles.icon}/>
                 <Text style ={styles.Text1}>Dusun</Text>
                 <Image source={require('../../asset/slide-right.png')} style={styles.icon1}/>
            </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={()=>  navigation.navigate('Login')}>
            <View style={styles.header1}>
                 <View style={styles.Tepi}></View>
                 <Image source={require('../../asset/home3.png')} style={styles.icon}/>
                 <Text style ={styles.Text1}>Dusun</Text>
                 <Image source={require('../../asset/slide-right.png')} style={styles.icon1}/>
            </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={()=>  navigation.navigate('Login')}>
            <View style={styles.header1}>
                 <View style={styles.Tepi}></View>
                 <Image source={require('../../asset/home3.png')} style={styles.icon}/>
                 <Text style ={styles.Text1}>Dusun</Text>
                 <Image source={require('../../asset/slide-right.png')} style={styles.icon1}/>
            </View>
            </TouchableOpacity> */}

            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                contentContainerStyle={{paddingHorizontal:12}}
            />

            <View>
                <TouchableOpacity activeOpacity={1} onPress={()=>  navigation.navigate('Tambah')}>
                      <Image source={require('../../asset/add.png')} style={styles.iconadd}/>
                 </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create ({
    header:{
        width:'100%',
        height: 50,
        backgroundColor:'#f1f2f6',
        alignItems:'center',
        flexDirection:'row',
    },
    header1:{
        width:350,
        height: 50,
        backgroundColor:'#ffff',
        alignItems:'center',
        flexDirection:'row',
        marginTop:15,
        borderRadius:5,
        elevation:5
    },
    Tepi:{
        width:7,
        height: 50,
        backgroundColor:'#1e90ff',
        alignItems:'center',
        flexDirection:'row',
        borderBottomLeftRadius:5,
        borderTopLeftRadius:5
    },
    Logo:{
        width:30,
        height:30,
        marginLeft:20
    },
    icon:{
        width:20,
        height:20,
        marginLeft:15,
    },
    icon1:{
        width:25,
        height:25,
        marginLeft:310,
        position:'absolute'
    },
    iconadd:{
        width:60,
        height:60,
        top: 500,              // jarak dari atas 50 unit
        left: 110,             // jarak dari kiri 30 unit
        position:'absolute'
    },
    Text:{
        fontSize:20,
        fontWeight:'600',
        color:'black',
        marginLeft:10
    },
    Text1:{
        fontSize:15,
        fontWeight:'500',
        color:'black',
        marginLeft:15
    }
})