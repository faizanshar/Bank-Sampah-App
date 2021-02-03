import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4ffc4',
  },
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  imgback: {
    width: '70%',
    height: 30,
    marginLeft: '10%',
  },
  touchback: {
    width: '12%',
    marginLeft: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtback: {
    fontSize: 20,
    // marginTop: '1%',
    marginLeft: '2%',
    // marginRight:'2%',
    fontWeight: 'bold',
    color: 'black',
  },
  container2: {
      width:'100%',
      height:633,
      backgroundColor:'#fff',
    //   marginTop: '20%',
      // borderTopRightRadius:60,
      borderTopLeftRadius:70
  },
  imgfoto: {
    width:'35%',
    height:120,
    alignSelf:'center',
    marginTop:'20%',
    borderRadius:60
  },
  view1: {
    width:'100%',
    height:300,
    // backgroundColor:'yellow',
    alignSelf:'center',
    marginTop:'10%',
    flexDirection:'row'
  },
  viewimg: {
    width:'20%',
    // backgroundColor:'red',
    alignItems:'center'
  },
  img: {
    width:'35%',
    height:25,
    marginVertical:15
  },
  viewtxt: {
    width:'80%',
    // backgroundColor:'gray',
    // alignItems:'center'
  },
  txt: {
    fontSize:18,
    fontWeight:'bold',
    marginVertical:17
  },
  imgloading: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    marginTop: '20%',
  },
  txttunggu: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: '20%',
  },
});
