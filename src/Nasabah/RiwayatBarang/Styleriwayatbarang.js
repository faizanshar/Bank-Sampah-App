import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  viewbarang: {
    width:'90%',
    height:80,
    alignSelf:'center',
    backgroundColor:'#fff',
    marginTop:'5%',
    borderRadius:20,
    // borderBottomLeftRadius:30,
    // borderBottomRightRadius:30,
    elevation:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  txtsampah: {
      fontSize:20,
      fontWeight:'bold',
    //   marginLeft:'10%',
    //   marginTop:'2%'
  },
  txtberat: {
      fontSize:12,
    //   color:,
      fontWeight:'bold',
      marginTop:'5%'
  },
  txttanggal: {
      fontSize:14,
      fontWeight:'bold',
      // marginBottom:'10%',
      // alignSelf:'center'
      // marginRight:'2%'
      // marginLeft:60
  },
  txtharga: {
      fontSize:19,
      color:'green',
      fontWeight:'bold',
      marginTop:20,
      alignSelf:'center'
      // marginBottom:'15%',
      // marginRight:"20%"
  },
  imgsampah: {
    width:'14%',
    height:40
  },
  imgsampahku: {
    width:'50%',
    height:120,
    alignSelf:'center',
    marginTop:'8%'
  },
  imgmobil: {
    width:'18%',
    height:18
  },
  imghouse: {
    width:'15%',
    height:15
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
