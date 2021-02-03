import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#c4ffc4',
    flexDirection: 'row',
    alignItems: 'center',
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
  img: {
    width: '13%',
    height: 46,
    borderRadius: 30,
    marginLeft: 10,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  viewsend: {
    // width: '100%',
    // height:60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#011a27',
  },
  inputsend: {
    width: '84%',
    height: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  imgsend: {
    width: '8%',
    height: 28,
    marginLeft: 15,
    // position:'absolute'
  },
  txtwaktu: {
    fontSize:12,
    fontWeight:'bold',
    alignSelf:'flex-end',
    // marginRight:'5%'
    margin:5
  },
  view1: {
    alignSelf: 'flex-end',
    // backgroundColor: 'red',
    margin: 3,
    marginRight: 10,
    borderRadius: 10,
    marginTop: 10,
    // borderTopRightRadius:50,
    marginBottom: 10,
    letterSpacing: 3,
    // width:'80%',
    marginLeft:10,
    // flexDirection:'row',
    alignItems:'center'
  },
  txtupdate: {
    fontSize:13,
    fontWeight:'bold',
    // color:'#ddd'
  },
  view2: {
    alignSelf: 'flex-start',
    // backgroundColor: 'red',
    margin: 3,
    marginRight: 10,
    borderRadius: 10,
    marginTop: 10,
    // borderTopRightRadius:50,
    marginBottom: 10,
    letterSpacing: 3,
    // width:'80%',
    marginLeft:10,
    // flexDirection:'row',
    alignItems:'center'
  },
  txtwaktu2: {
    fontSize:12,
    fontWeight:'bold',
    alignSelf:'flex-start',
    // marginRight:'5%'
    margin:5
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
