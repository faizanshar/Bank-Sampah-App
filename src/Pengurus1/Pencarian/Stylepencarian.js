import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    // backgroundColor:'#c4ffc4'
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
  viewsearch: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    marginLeft: '3%',
    elevation: 10,
    borderRadius: 20,
    flexDirection: 'row',
  },
  inputsearch: {
    width: '80%',
    height: 50,
    //   backgroundColor:'yellow',
    //   borderRadius:20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  touchsearch: {
    width: '20%',
    height: 50,
    //   backgroundColor:'red',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgsearch: {
    width: '43%',
    height: 25,
  },
  touchkontak: {
    width: '100%',
    height: 80,
    borderTopWidth: 2,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'red'
    // marginTop:'10%'
  },
  img: {
    width: '16%',
    height: 60,
    marginLeft: '2%',
    borderRadius: 50,
  },
  txtnama: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtnomor: {
    fontSize: 15,
    marginTop: '2%',
    fontWeight: 'bold',
  },
  viewcari: {
    width: '100%',
    height: 630,
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgwait: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    marginBottom: '20%',
    // marginTop:'20%'
  },
  imgwait2: {
    width: '75%',
    height: 200,
    alignSelf: 'center',
    marginBottom: '50%',
    // elevation:10
    // marginTop:'20%'
  },
  txtwait2: {
      fontSize:15,
      fontWeight:'bold',
      bottom:'25%'
    //   marginTop:'10%'
  }
});
