import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import {View,Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native'


const Profile = ({navigation}) => {
    const [theme,setTheme] = useState(true)

    const handlingTheme = (status) => {
        setTheme(status)
        AsyncStorage.setItem("theme", status == true ? '1' : '0')
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
    return (
        <View style={{flex:1, backgroundColor:theme ==true ? 'white': "black",alignItems:'center'}}>
            <View style={styles.header}>
                <Text style={styles.Text}>Profile</Text>
            </View>
            <View style={styles.header1}>
                <Image source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZ75KKy6w0Rw_ExGPMO1ZcccgpjXaK-xKgQ&s'}}
                 style={styles.Photo}
                />
                 <Text style={styles.nama}>anggabagicerita</Text>
                 <Text style={styles.karir}>Kreator Digital</Text>
            </View>
            <View style={{marginTop:30}}>
               <View style={styles.header2}>
                    <View style={styles.icon1}>
                         <Image source={{uri :'https://w7.pngwing.com/pngs/137/929/png-transparent-calendar-icon-calendar-date-computer-icons-calendar-miscellaneous-blue-text-thumbnail.png'}}
                         style={styles.icon}
                         />
                     </View>
                     <View style={{marginLeft:20}}>
                         <Text style={styles.karir}>Tempat & tanggal lahir</Text>
                          <Text style={styles.nama}>Kabupaten Toba, 03 November 2002</Text>
                      </View>
                </View>

                <View style={styles.header2}>
                    <View style={styles.icon1}>
                         <Image source={{uri :'https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png'}}
                         style={styles.icon}
                         />
                     </View>
                     <View style={{marginLeft:20}}>
                         <Text style={styles.karir}>Alamat</Text>
                          <Text style={styles.nama}>Jl. Patuan Nagari No.6 Balige</Text>
                      </View>
                </View>
            </View>
            <TouchableOpacity style={styles.Tema} title='WHITE THEME' color={"green"} onPress={() => handlingTheme (true)}>
                <Text style={styles.Text3}>white</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Tema} title='BLACK THEME'onPress={() => handlingTheme (false)}>
                <Text style={styles.Text3}>Black</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Keluar} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.Text1}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create ({
    header:{
        width:'100%',
        height:150,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        backgroundColor:'#2e86de'
    },
    header1:{
        width:340,
        height:180,
        backgroundColor:'#ffff',
        elevation:5,
        borderRadius:10,
        marginTop:-90,
        alignItems:'center',
        justifyContent:'center'
    },
    header2:{
        width:340,
        height:60,
        backgroundColor:'#ffff',
        alignItems:'center',
        flexDirection:'row',
        marginTop:5
    },
    Text:{
        marginTop:20,
        marginLeft:30,
        fontSize:16,
        color:'#ffff'
    },
    Text1:{        
        fontSize:16,
        color:'#e66767'
    },
    Text3:{        
        fontSize:16,
        color:'white'
    },
    Photo:{
        marginBottom:15,
        width:80,
        height:80,
        borderRadius:50
    },
    icon:{
        width:25,
        height:25,
        borderRadius:50
    },
    icon1:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:'#ffff',
        alignItems:'center',
        justifyContent:'center',
        elevation:5
    },
    nama:{
        fontSize:15,
        fontWeight:'500',
        color:'black'
    },
    karir:{
        fontSize:11,
        fontWeight:'400',
        color:'silver'
    },
    Keluar:{
        width:340,
        height:40,
        backgroundColor:'#ffcccc',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:200
    },
    Tema:{
        width:40,
        height:40,
        backgroundColor:'#2e86de',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:1
    }
})