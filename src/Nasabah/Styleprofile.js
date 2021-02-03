import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4ffc4',
  },
  container2: {
    width: '100%',
    height: 530,
    marginTop: '30%',
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    elevation: 8,
  },
  img: {
    width: '100%',
    height: 80,
    alignSelf: 'center',
    borderRadius: 30,
    // bottom: '9%',
  },
  txtnama: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    bottom: '7%',
    //   textShadowColor:'black',
    //   textShadowOffset:{
    //       width:0,
    //       height:0
    //   },
    //   textShadowRadius:1
  },
  viewimg: {
    elevation: 10,
    backgroundColor: 'red',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    bottom: '9%',
    alignSelf: 'center',
    borderRadius: 30,
  },
  txtemail: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    bottom: '6%',
    color: 'gray',
  },
  touchedit: {
    flexDirection: 'row',
    marginLeft: '2%',
    marginTop: '10%',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  viewedit: {
    width: '12%',
    height: 40,
    backgroundColor: '#c4ffc4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 8,
    marginLeft: '3%',
  },
  imgedit: {
    width: '50%',
    height: 21,
    // backgroundColor:'red'
  },
  txtedit: {
    fontSize: 17,
    marginLeft: '5%',
    fontWeight: 'bold',
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
