import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {styles} from '../Nasabah/Stylehomenasabah';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

class HomeNasabah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      data2: {},
      token: '',
      refresh: false,
      loading: false,
      data3:{}
    };
    // this.componentDidMount()
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getNasabah();
          // this.getProduct();
        } else {
          // this.getProduct();
          this.props.navigation.navigate('Home1');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKEN', this.props.userToken.userReducer.token);
  }
  onRefreshControl() {
    this.setState({refresh: true});
    this.getNasabah();
  }
  getNasabah() {
    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/nasabah', {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
      },
    })
      .then((responseJson) => responseJson.json())
      .then((responseJson) => {
        console.log('ini Dia', responseJson);
        // console.log(responseJson);
        // const {status} = responseJson;
        console.log('ini Dia',responseJson);
        if (responseJson.status == 'success') {
          this.setState({
            data: responseJson.user,
            refresh: false,
            loading: false,
          });
          this.setState({data2: responseJson, loading: false});

          // this.setState({loading: true});
          // console.log(responseJ);
        } else {
          console.log('ini else', responseJson);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    // console.log('INI DATA REDUX',this.props.)
    // console.log('ini state data', this.state.data);
    return (
      <View style={styles.container}>
        {this.state.loading !== false ? (
          <View>
            <LottieView
              source={require('../Assets/28724-loading-v3.json')}
              autoPlay={true}
              style={styles.imgloading}
            />
            <Text style={styles.txttunggu}>Tunggu Sebentar...</Text>
            <View style={{width: '10%', height: 30}}></View>
          </View>
        ) : (
          <ScrollView
            style={{width: '100%'}}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refresh}
                onRefresh={() => this.onRefreshControl()}
              />
            }>
            <View style={styles.header}>
              {/* <View style={styles.viewchatprofile}>
              <TouchableOpacity style={styles.touchchat} onPress={()=>this.props.navigation.navigate("Chat")}>
                <Image source={require('../Assets/blackchat.png')} style={styles.imgchat}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchakun} onPress={()=>this.props.navigation.navigate("Profile")}>
                <Image source={require('../Assets/bulatakun.png')} style={styles.imgakun}/>
              </TouchableOpacity>
            </View> */}
              <View style={styles.viewname}>
                <View>
                  <Text style={styles.txthi}>Halo {this.state.data.name}</Text>
                  <Text style={styles.txthave}>
                    Sudah buang sampah hari ini ?
                  </Text>
                </View>

                <Image
                  source={
                    this.state.data.foto
                      ? {uri: this.state.data.foto}
                      : {
                          uri:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==',
                        }
                  }
                  style={styles.img}
                />
              </View>
              <View style={styles.viewall}>
                <View style={styles.viewprice}>
                  <Text style={styles.txtprice}>Saldo</Text>
                  {/* <TouchableOpacity
                  onPress={() =>
                    console.log(this.props.userToken.userReducer.token)
                  }>
                  <Text>Klik</Text>
                </TouchableOpacity> */}
                  <Text style={styles.txtprice2}>
                    Rp.{this.state.data2.uang},-
                  </Text>
                </View>

                <View style={styles.viewtouch1}>
                  <TouchableOpacity
                    style={styles.touch1}
                    onPress={() =>
                      this.props.navigation.navigate('Riwayatuang')
                    }>
                    <Image
                      source={require('../Assets/uang.png')}
                      style={styles.imguang}
                    />
                    <Text style={styles.txtuang}>Riwayat Uang</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.touch2}
                    onPress={() =>
                      this.props.navigation.navigate('Riwayatbarang')
                    }>
                    <Image
                      source={require('../Assets/barang.png')}
                      style={styles.imgbarang}
                    />
                    <Text style={styles.txtbarang}>Riwayat Sampah</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.viewtouch1}>
                  <TouchableOpacity
                    style={styles.touch1}
                    onPress={() =>
                      this.props.navigation.navigate('Penjemputan')
                    }>
                    <Image
                      source={require('../Assets/jemput.png')}
                      style={styles.imgjemput}
                    />
                    <Text style={styles.txtpenjemputan}>Penjemputan</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.touch2}
                    onPress={() =>
                      this.props.navigation.navigate('Riwayatpenjemputan')
                    }>
                    <Image
                      source={require('../Assets/udah.png')}
                      style={styles.imgudah}
                    />
                    <Text style={styles.txtudah}>Riwayat Penjemputan</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     userSplash: (token) => dispatch({type: 'TOKEN_USER', payload: token}),
//   };
// };

export default connect(mapStateToProps)(HomeNasabah);
