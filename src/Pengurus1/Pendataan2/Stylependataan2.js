import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    touchkontak: {
        width:'100%',
        height:80,
        borderTopWidth:2,
        borderColor:'#ddd',
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'red'
        // marginTop:'10%'

    },
    img: {
        width:'16%',
        height:60,
        marginLeft:'2%',
        borderRadius:50
    },
    txtnama: {
        fontSize:18,
        fontWeight:'bold'
    },
    txtnomor:{
        fontSize:15,
        marginTop:"2%",
        fontWeight:'bold'
    },
    touchplus: {
        width:'17%',
        height:60,
        backgroundColor:'#c4ffc4',
      //   margin:20,
        alignSelf:'flex-end',
        position:'absolute',
        bottom:'2%',
        right:10,
        // top:'20%',
        alignItems:'center',
        justifyContent:'center',
        elevation:5,
        borderRadius:40,
        opacity:0.8,
        // marginTop:'10%'
      //   marginRight:'70%'
    },
    imgplus: {
        width:'50%',
        height:32
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#c4ffc4',
        flexDirection: 'row',
        alignItems: 'center',
        elevation:10
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
      viewname: {
        //   backgroundColor:'yellow',
          width:'85%',
          height:50,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between'
      },
      touchsearch: {
          width:'20%',
          height:40,
        //   backgroundColor:'red',
          justifyContent:'center',
          alignItems:'center'
      },
      imgsearch: {
          width:'40%',
          height:25
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
})