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
        alignItems:'center'
        // backgroundColor:'#fff'
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
})