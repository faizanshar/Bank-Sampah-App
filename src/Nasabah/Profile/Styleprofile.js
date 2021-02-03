import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 50,
    // backgroundColor: '#c4ffc4',
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
    marginLeft: '12%',
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
    width: '100%',
    height: 480,
    backgroundColor: '#c4ffc4',
    marginTop: '10%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    elevation: 10,
  },
  touchimg: {
    width: '30%',
    height: 100,
    alignSelf: 'center',
    //   backgroundColor:'yellow',
    borderRadius: 50,
    //   position:'absolute',
    // bottom:30
    marginTop: '5%',
    elevation:20
  },
  img: {
    width: '100%',
    height: 100,
    borderRadius: 40,
  },
  viewnama: {
    width: '80%',
    height: 50,
    backgroundColor: 'red',
    marginTop: '10%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // borderBottomWidth:1
  },
  imgnama: {
    width: '62%',
    height: 38,
    marginLeft: '2%',
  },
  inputnama: {
    width: '90%',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginLeft: '5%',
    height: 40,
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewimgnama: {
    width: '19%',
    backgroundColor: '#fff',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    elevation: 10,
    // height:70
  },
  container3: {
    width: '90%',
    // height: 60,
    // backgroundColor:'yellow',
    marginTop: '10%',
    alignSelf: 'center',
    flexDirection: 'row',
    // alignItems: 'center',
  },
  container31: {
    // backgroundColor:'red',
    width: '80%',
    // height: 60,
  },
  inputalamat: {
    width: '90%',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginLeft: '5%',
    // height: 40,
    fontSize: 18,
    fontWeight: 'bold',
    
    // maxHeight:200,
    // backgroundColor:'red'
  },
  touchedit: {
     backgroundColor:'#ddd',
     alignSelf:'center',
     width:'90%',
     height:40,
     alignItems:'center',
     justifyContent:'center',
     borderRadius:30,
     marginTop:'20%'
  },
  imgloading: {
    width:'150%',
    height:150
  }
});
