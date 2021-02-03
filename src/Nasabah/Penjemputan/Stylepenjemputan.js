import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems:'center',
    // justifyContent:'center'
  },
  header: {
    width: '100%',
    height: 560,
    backgroundColor: '#c4ffc4',
    // flexDirection: 'row',
    alignItems: 'center',
    elevation:8,
    marginTop:'10%',
    borderTopRightRadius:40,
    borderTopLeftRadius:40
    // justifyContent
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
  inputnama: {
    width:'80%',
    backgroundColor:"#fff",
    elevation:8,
    height:50,
    borderRadius:10,
    marginTop:"10%",
    alignSelf:'center'
    // marginLeft:'2%'
  },
  inputtelpon: {
    width:'80%',
    backgroundColor:"#fff",
    elevation:8,
    height:50,
    borderRadius:10,
    marginTop:'8%',
    alignSelf:'center'
  },
  img: {
    width: '100%',
    height: 80,
    // alignSelf:'center'

    // borderRadius: 20,
    // marginTop: 20,
    // marginLeft: 90,
  },
  txtfoto: {
    fontSize:18,
    fontWeight:'bold',

  },
  inputalamat: {
    width: '80%',
    height: 75,
    backgroundColor: '#fff',
    marginTop: '8%',
    // opacity: 0.9,  
    borderRadius: 10,
    elevation: 8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    alignSelf:'center'

  },
  viewpicker: {
    width: '40%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    marginTop:'5%',
    elevation:8,
    alignSelf:'center'

  },
  touchjemput: {
    width:'80%',
    height:50,
    backgroundColor:'#eee',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    elevation:8,
    marginTop:'10%',
    alignSelf:'center',
    marginBottom:'10%'
  },
  txtjemput: {
    fontSize:15,
    // color:'#fff',
    fontWeight:'bold'
  },
  imgloading: {
    width:'40%',
    height:170,
    marginTop:'10%',
    alignSelf:'center'
    // marginLeft:'60%'
    // alignSelf:'center'
  },
  imgloading2: {
    width:'150%',
    height:150
  } 
});
