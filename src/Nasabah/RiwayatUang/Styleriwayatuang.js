import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems:'center',
    // justifyContent:'center'
  },
  scroll: {
    width: '100%',
    backgroundColor: '#c4ffc4',
    marginTop: '10%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  header: {
    width: '100%',
    height: 50,
    // backgroundColor: '#c4ffc4',
    flexDirection:'row',
    alignItems:'center'
  },

  txtback: {
    fontSize: 20,
    // marginTop: '1%',
    marginLeft: '2%',
    // marginRight:'2%',
    fontWeight: 'bold',
    color: 'black',
  },
  imguang: {
    width: '6%',
    height: 20,
    marginLeft: '3%',
    marginTop: '3%',
  },
  viewmoney: {
    width:'90%',
    height:70,
    alignSelf:'center',
    backgroundColor:'#fff',
    marginTop:'5%',
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30,
    elevation:10,
    flexDirection:'row',
    alignItems:'flex-start',
    // justifyContent:'space-evenly'    
  },
  imgdebit: {
    width:'8%',
    height:21,
    marginLeft:'5%',
    alignSelf:'center'
  },
  txtdebit: {
    color:'green',
    fontSize:20,
    marginRight:'20%',
    marginTop:'2%',
    alignSelf:'center',
    fontWeight:'bold',
    
  },
  txtdebit2: {
    fontSize:12,
    fontWeight:'bold',
    marginLeft:'67%',
    marginTop:'2%'
  },
  txtkredit: {
    color:'red',
    fontSize:20,
    marginRight:'20%',
    marginTop:'2%',
    alignSelf:'center',
    fontWeight:'bold',
    
  },
  imguangku: {
    width:'60%',
    height:120,
    alignSelf:'center',
    marginTop:'8%'
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
  imgkosong: {
    width:'100%',
    height:350,
    alignSelf:'center'
  },
  txtdata: {
    fontSize:15,
    fontWeight:'bold',
    alignSelf:'center',
    bottom:20
  },
});
