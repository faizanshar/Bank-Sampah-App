import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
  viewinput: {
    width: '70%',
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 20,
    marginTop: '10%',
  },
  viewinput2: {
    width: '70%',
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 20,
    marginTop: '8%',
  },
  inputpassword: {
    width: '100%',
    fontWeight: 'bold',
  },
  touchubah: {
      width:'70%',
      height:50,
      backgroundColor:'#ddd',
      elevation:10,
      alignSelf:'center',
      marginTop:'15%',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20
  },
  txtubah: {
      fontSize:15,
      fontWeight:'bold'
  }
});
