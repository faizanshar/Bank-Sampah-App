import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c4ffc4',
    justifyContent: 'space-around',
    elevation:10
    // elevation:100
    // backgroundColor:'red'
  },
  viewexit: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c4ffc4',
    // justifyContent: 'space-around',
    elevation:10
  },
  touchexit: {
    width:'20%',
    height:30,
    // backgroundColor:'red',
    marginLeft:'5%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  imgexit: {
    width:'30%',
    height:20
  },
  viewall: {
    width: '100%',
    height: 535,
    backgroundColor: '#c4ffc4',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  imgakun: {
    width: '82%',
    height: 30,
    // marginTop:'3%'
    // backgroundColor:'red',
  },
  viewname: {
    flexDirection: 'row',
    marginTop: '15%',
    marginLeft: '5%',
    backgroundColor: 'red',
    // alignSelf:'center'
  },
  txthi: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#007600',
    // marginTop: '5%',
    marginLeft: '5%',
  },
  txtname: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#007600',
    marginLeft: '2%',
  },
  img2: {
    width: '20%',
    height: 60,
    borderRadius: 50,
    marginLeft: '15%',
    // tintColor:'#fff'
  },
  txthave: {
    fontSize: 14,
    // marginL  eft:'5%',
    marginTop: '2%',
    color: '#007600',
    marginLeft: '5%',
  },
  touch: {
    width: '80%',
    height: 70,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: '30%',
    borderRadius: 10,
    elevation: 10,
  },
  touch2: {
    width: '80%',
    height: 70,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: '20%',
    borderRadius: 10,
    elevation: 10,
  },
  view1: {
    width: '90%',
    height: 150,
    backgroundColor: '#fff',
    marginTop: '10%',
    alignSelf: 'center',
    elevation: 10,
  },
  view2: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //   backgroundColor:'red'
  },
  img: {
    width: '8%',
    height: 25,
    marginTop: '5%',
    marginLeft: '5%',
  },
  txtnama: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '10%',
    marginTop: '10%',
  },
  txttelpon: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: '12%',
  },
  txttanggal: {
    fontSize: 12,
    fontWeight: 'bold',
    margin: 10,
  },
  view3: {
    width: '100%',
    height: 50,
    //   backgroundColor:'yellow',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtberat: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: '5%',
    marginLeft: '3%',
  },
  view4: {
    width: '100%',
    height: 50,
    //   backgroundColor:'yellow',
    // flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  txttotal: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    marginRight: '5%',
    //   alignSelf:'center'
  },
  touchplus: {
      width:'17%',
      height:60,
      backgroundColor:'#c4ffc4',
    //   margin:20,
      alignSelf:'flex-end',
      position:'absolute',
      top:'85%',
      right:10,
      alignItems:'center',
      justifyContent:'center',
      elevation:5,
      borderRadius:40,
      opacity:0.8
    //   marginRight:'70%'
  },
  imgplus: {
      width:'50%',
      height:32
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
