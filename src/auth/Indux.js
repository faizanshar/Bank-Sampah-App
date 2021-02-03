import React from 'react';
import {Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';


// Auth
import Login from '../auth/Login';
import Register from '../auth/Register';
import Splash from '../auth/Splash';

// Nasabah
import HomeNasabah from '../Nasabah/HomeNasabah';
import ChatNasabah from '../Nasabah/ChatNasabah';
import ProfileNasabah from '../Nasabah/ProfileNasabah';

//profile nasabah
import Profile from '../Nasabah/Profile/Profile';

//Riwayatuang nasabah
import Riwayatuang from '../Nasabah/RiwayatUang/Riwayatuang';

//Riwayatpenjemputan nasabah
import Riwayatpenjemputan from '../Nasabah/RiwayatPenjemputan/Riwayatpenjemputan';
import Detailscreen from '../Nasabah/RiwayatPenjemputan/Detailscreen';
import Informasi from '../Nasabah/RiwayatPenjemputan/Informasi';

//Riwayatbarang nasabah
import Riwayatbarang from '../Nasabah/RiwayatBarang/Riwayatbarang';

//rank nasabah
import Rank from '../Nasabah/Rank/Rank'

//Penjemputan nasabah
import Penjemputan from '../Nasabah/Penjemputan/Penjemputan';

// Chat Id nasabah
import Chatidnasabah from '../Nasabah/Chat/Chatidnasabah';
import Chatidnasabah2 from '../Nasabah/Chat/Chatidnasabah2'


//Resetpassword nasabah
import Resetpassword from '../Nasabah/Resetpassword/Resetpassword'

//Pengurus1
import Homepengurus1 from '../Pengurus1/Homepengurus1';
import Chat1 from '../Pengurus1/Chat1';
// import Profile1 from '../Pengurus1/Profile1';

//datajemput pengurus1
import Datajemput from '../Pengurus1/Datajemput/Datajemput';
import Detaildatajemput from '../Pengurus1/Datajemput/Detaildatajemput';

//harusjemput pengurus1
import Harusjemput from '../Pengurus1/Harusjemput/Harusjemput';

//riwayatjemput pengurus1
import Riwayatjemput from '../Pengurus1/Riwayatjemput/Riwayatjemput';

//chatid1 pengurus1
import Chatidpengurus1 from '../Pengurus1/Chatid1/Chatidpengurus1'
import Chatidpengurus2 from '../Pengurus1/Chatid1/Chatidpengurus2'

//Profilepengurus1 
// import Profilepengurus1 from '../Pengurus1/Profilepengurus1/Profilepengurus1'

//Kontaknasabah pengurus1
import Kontaknasabah from '../Pengurus1/Kontaknasabah/Kontaknasabah'

//Pencarian pengurus1
import Pencarian from '../Pengurus1/Pencarian/Pencarian'

//Pencarian2 pengurus1
import Pencarian2 from '../Pengurus1/Pencarian2/Pencarian2'

//Pendataanantar pengurus1 
import Pendataanantar from '../Pengurus1/Pendataan2/Pendataanantar'

//pendataan pengurus1
import Pendataan from '../Pengurus1/Pendataan/Pendataan';

//pendataan2 pengurus1
import Pendataan2 from '../Pengurus1/Pendataan2/Pendataan2'

//Home pengurus2
import Home2 from '../Pengurus2/Home2'

//Datajual pengurus2
import Datajual from '../Pengurus2/Pendataan/Datajual'
import Chatid1 from '../Pengurus1/Chatid1/Chatidpengurus1';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabs1() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      // inactiveColor="black"
      shifting={true}
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Home"
        component={HomeNasabah}
        options={{
          tabBarLabel: 'Home',

          tabBarColor: '#007f00',
          tabBarIcon: ({color}) => {
            return (
              <Image
                source={require('../Assets/Home.png')}
                style={{width: '90%', height: 20}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatNasabah}
        options={{
          tabBarLabel: 'Chat',
          tabBarColor: '#007f00',
          tabBarIcon: ({color}) => {
            return (
              <Image
                source={require('../Assets/Chat.png')}
                style={{width: '99%', height: 24}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNasabah}
        options={{
          tabBarLabel: 'account',
          tabBarColor: '#007f00',
          tabBarIcon: ({color}) => {
            return (
              <Image
                source={require('../Assets/Profile.png')}
                style={{width: '90%', height: 22}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function MyTabs2() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      // inactiveColor="black"
      shifting={true}
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Homepengurus"
        component={Homepengurus1}
        options={{
          tabBarLabel: 'Home',

          tabBarColor: '#007f00',
          tabBarIcon: ({color}) => {
            return (
              <Image
                source={require('../Assets/Home.png')}
                style={{width: '90%', height: 20}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Chatpengurus"
        component={Chat1}
        options={{
          tabBarLabel: 'Chat',
          tabBarColor: '#007f00',
          tabBarIcon: ({color}) => {
            return (
              <Image
                source={require('../Assets/Chat.png')}
                style={{width: '99%', height: 24}}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Profilepengurus"
        component={Profile1}
        options={{
          tabBarLabel: 'account',
          tabBarColor: '#007f00',
          tabBarIcon: ({color}) => {
            return (
              <Image
                source={require('../Assets/Profile.png')}
                style={{width: '90%', height: 22}}
              />
            );
          },
        }}
      /> */}
    </Tab.Navigator>
  );
}
// function MyTabs3() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="#fff"
//       // inactiveColor="black"
//       shifting={true}
//       barStyle={{backgroundColor: '#fff'}}>
//       <Tab.Screen
//         name="Home2"
//         component={Home2}
//         options={{
//           tabBarLabel: 'Home',

//           tabBarColor: '#007f00',
//           tabBarIcon: ({color}) => {
//             return (
//               <Image
//                 source={require('../Assets/Home.png')}
//                 style={{width: '90%', height: 20}}
//               />
//             );
//           },
//         }}
//       />
      {/* <Tab.Screen
        name="Chatpengurus"
        component={Chat1}
        options={{
          tabBarLabel: 'Chat',
          tabBarColor: '#007f00',
          tabBarIcon: ({color}) => {
            return (
              <Image
                source={require('../Assets/Chat.png')}
                style={{width: '99%', height: 24}}
              />
            );
          },
        }}
      /> */}
      {/* <Tab.Screen
        name="Profilepengurus"
        component={Profile1}
        options={{
          tabBarLabel: 'account',
          tabBarColor: '#007f00',
          tabBarIcon: ({color}) => {
            return (
              <Image
                source={require('../Assets/Profile.png')}
                style={{width: '90%', height: 22}}
              />
            );
          },
        }}
      /> */}
    // </Tab.Navigator>
  // );
// }

const Indux = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home1"
        component={MyTabs1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home2"
        component={MyTabs2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home3"
        component={Home2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Riwayatuang"
        component={Riwayatuang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Riwayatbarang"
        component={Riwayatbarang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Penjemputan"
        component={Penjemputan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Riwayatpenjemputan"
        component={Riwayatpenjemputan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profilenasabah"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatidnasabah"
        component={Chatidnasabah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatidnasabah2"
        component={Chatidnasabah2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detailnasabah"
        component={Detailscreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Resetpassword"
        component={Resetpassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Informasinasabah"
        component={Informasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Datajemput"
        component={Datajemput}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Harusjemput"
        component={Harusjemput}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Riwayatjemput"
        component={Riwayatjemput}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Pendataan"
        component={Pendataan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detaildatajemput"
        component={Detaildatajemput}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Datajual"
        component={Datajual}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Rank"
        component={Rank}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatidpengurus1"
        component={Chatidpengurus1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kontaknasabah"
        component={Kontaknasabah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pencarian"
        component={Pencarian}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pendataan2"
        component={Pendataan2}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Pencarian2"
        component={Pencarian2}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Pendataanantar"
        component={Pendataanantar}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Chatidpengurus2"
        component={Chatidpengurus2}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Profilepengurus1"
        component={Profilepengurus1}
        options={{headerShown: false}}
      /> */}
       
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Indux;
