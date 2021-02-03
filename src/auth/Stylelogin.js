import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#c4ffc4',
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
      width:'50%',
      height:200,
      marginTop:100
  },
  container2: {
      backgroundColor: '#c4ffc4',
    alignItems: 'center',
    width:'99%',
    height:450,
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    marginTop:50
  },
  txtlogin: {
      fontSize:20,
      fontWeight:'bold',
      marginTop:10,
      textShadowColor:'#fff',
      textShadowRadius:1,
      textShadowOffset: {
          width:0,
          height:0
      }
  },
//   boxcontainer: {
//     width: '80%',
//     height: 300,
//     backgroundColor: '#fff',
//     alignSelf: 'center',
//     borderRadius: 20,
//     elevation: 10,
//     alignItems: 'center',
//     //   opacity:0.9
//   },
//   txtlogin: {
//     fontSize: 20,
//     marginTop: 10,
//     fontWeight: 'bold',
//   },
  viewusername: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    marginTop: 40,
    opacity: 0.9,
    borderRadius: 20,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  inputusername: {
    width: '75%',
    marginLeft: 10,
  },
  imguser: {
      width:'15%',
      height:30,
      marginRight:9
  },
  viewpassword: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    marginTop: 20,
    opacity: 0.9,
    borderRadius: 20,
    elevation: 8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  inputpassword: {
    width: '75%',
    marginLeft: 10,
  },
  imgpassword: {
    width:'70%',
    height:30,
    marginRight:50
  },
  touchlogin: {
      width:'90%',
      height:50,
      backgroundColor:'#ddd',
      alignItems:'center',
      justifyContent:'center',
      marginTop:40,
      borderRadius:40,
      elevation:10
  },
  txttouchlogin: {
      fontSize:15,
      color:'black',
      fontWeight:'bold'
  },
  viewdont: {
      flexDirection:'row',
      marginTop:10
  },
  txtregister: {
      fontSize:15,
      fontWeight:'bold',
      color:'black'
  },
  txtdont: {
      color:'black',
    //   fontWeight:'bold'
  },
  imgloading: {
    width:'150%',
    height:150
  },
  touchforgot: {
    // backgroundColor:'red',
    marginTop:'10%'
  },
  txtforgot: {
    fontSize:15,
    fontWeight:'bold'
  }
  
});
