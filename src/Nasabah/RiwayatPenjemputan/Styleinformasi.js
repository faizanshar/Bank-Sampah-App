import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
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
      view1: {
          width:'100%',
          height:50,
        //   backgroundColor:'red',
          marginTop:'10%',
          flexDirection:'row',
          alignItems:'center'
      },
      txt: {
        fontSize:18,
        fontWeight:'bold'
      },
      view2: {
        width:'100%',
        height:50,
      //   backgroundColor:'red',
        // marginTop:'10%',
        flexDirection:'row',
        alignItems:'center'
    },
})