import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#c4ffc4',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
  },
  touchback: {
    width: '12%',
    marginLeft: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgback: {
    width: '70%',
    height: 30,
    marginLeft: '10%',
  },
  txtback: {
    fontSize: 20,
    // marginTop: '1%',
    marginLeft: '2%',
    // marginRight:'2%',
    fontWeight: 'bold',
    color: 'black',
  },
  viewimg: {
    // backgroundColor: 'red',
    width: '40%',
    height: 150,
    marginTop: '20%',
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
  },
  imgsampah: {
    width: '100%',
    height: 150,
    borderRadius: 20,
  },
  viewnama: {
    width: '90%',
    height: 50,
    // backgroundColor: 'red',
    marginTop: '15%',
    alignSelf: 'center',
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'space-around'
  },
  viewimgnama: {
      width:'16%',
      height:50,
    //   backgroundColor:'green',
      borderRadius:30,
      elevation:20,
      marginLeft:'2%'
  },
  imgnama: {
    width: '100%',
    height: 50,
    borderRadius: 30,
    // marginLeft:'10%'
  },
  txtnama: {
      fontSize:18,
      fontWeight:'bold',
      marginLeft:'10%'
  },
  viewall: {
      width:'90%',
    //   height:220,
    //   backgroundColor:'green',
      alignSelf:'center',
      flexDirection:'row',
      marginTop:'5%'
  },
  viewimgicon: {
      width:'20%',
      height:220,
    //   backgroundColor:'yellow',
      alignItems:'center'
  },
  imgall: {
      width:'40%',
      height:20,
      marginVertical:10,
  },
  viewicon: {
      width:'75%',
      height:45,
      backgroundColor:'#c4ffc4',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:30,
      elevation:10,
      marginVertical:5,

  },
  viewtxt: {
      width:'80%',
      height:220,
    //   backgroundColor:'red'
  },
  txt: {
      fontSize:15,
      fontWeight:'bold',
      marginVertical:19,
      marginLeft:'10%'
  },
  imgloading: {
    width:'100%',
    height:200,
    alignSelf:'center',
    marginTop:'20%'
  },
  txttunggu: {
    fontSize:18,
    fontWeight:'bold',
    alignSelf:'center',
    marginTop:'20%'
  }
});
