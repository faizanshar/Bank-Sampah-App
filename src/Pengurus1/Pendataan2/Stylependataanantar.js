import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  inputketerangan: {
      width:'80%',
      alignSelf:'center',
      borderWidth:1,
      maxHeight:150,
      marginTop:'20%',
      borderRadius:20,
      backgroundColor:'#fff',
      elevation:10,
    fontWeight:'bold'

    //   elevation:10
  },
  viewdata: {
      width:'70%',
      height:100,
      // backgroundColor:'red', 
      alignSelf:'center',
      marginTop:'5%',
      flexDirection:'row',
      alignItems:'center',
      // justifyContent:'space-evenly',
      // backgroundColor:'red'
  },
  inputberat:{
    width:'40%',
    borderWidth:1,
    borderRadius:20,
    // marginLeft:'5%',
    fontWeight:'bold'
  },
  viewpicker: {
    width: '45%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    // marginTop:'5%',
    elevation:8,
    alignSelf:'center',
    borderWidth:1
  },
  viewpicker2: {
    width: '70%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    // marginTop:'5%',
    elevation:8,
    alignSelf:'center',
    borderWidth:1,
    marginTop:'20%'
  },
  touchdata: {
      width:'80%',
      height:50,
      backgroundColor:'#ddd',
      elevation:10,
      alignSelf:'center',
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      marginTop:'10%'
  },
  txtdata: {
      fontSize:15,
      fontWeight:'bold'
  },
  imgloading2: {
    width:'150%',
    height:150
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
  },
});
