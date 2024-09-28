import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import {View,Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native'

const Tambah = ({navigation}) => {
    const [theme,setTheme]=useState(true)

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

    return (
        <View style={{flex:1,backgroundColor:theme ==true ? 'white': "black", alignItems:'center'}}>
            <View style={styles.header}>
                 <TouchableOpacity activeOpacity={1} onPress={()=>  navigation.navigate('Home')}>
                 <Image source={{uri :'https://cdn1.iconfinder.com/data/icons/essential-29/24/arrow-ios-back-512.png'}} style={styles.Logo}/>
                 </TouchableOpacity>

                 <Text style ={styles.Text}>Tambah Dusun</Text>
            </View>
            <View style={{width:350, height:0.6, backgroundColor:'silver',marginTop:10}}></View>
                 <View>
                     <Text style ={styles.Text3}>Nama Dusun</Text>
                        <View style={styles.header1}>
                            <TextInput/>
                        </View>
                 </View>
            <TouchableOpacity style={styles.Keluar} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.Text2}>Kirim</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Tambah

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
        marginTop:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'silver',
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
        top: 470,              // jarak dari atas 50 unit
        left: 100,             // jarak dari kiri 30 unit
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
    },
    Text3:{
        fontSize:15,
        fontWeight:'500',
        color:'black',
        marginTop:10
    },
    Keluar:{
        width:350,
        height:40,
        backgroundColor:'#1e90ff',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:100
    },
    Text2:{        
        fontSize:16,
        color:'#ffff'
    },
})

