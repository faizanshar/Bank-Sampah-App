import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ToastAndroid,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {styles} from './Stylehome2';
import {connect} from 'react-redux';
// import {TextInput} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Home2 extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      data2: [],
      refresh: false,
      loading: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('Ini Value', value);
        // const {token} = this.state
        // console.log(token);
        if (value !== null) {
          // console.log('token');
          this.setState({token: value});
          // this.getUser();
          this.setState({loading: false});
        } else {
          this.props.navigation.navigate('Home1');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKEN', this.props.userToken.userReducer.token);
    this.getPengurus2();
    this.getData();
  }
  getPengurus2() {
    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/pengurus2', {
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
        if (responseJson) {
          this.setState({
            data: responseJson.user,
            refresh: false,
            loading: false,
          });
          // this.setState({data2: responseJson});

          // this.setState({loading: true});
          // console.log(responseJ);
        } else {
          console.log('ini else', response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  logOut() {
    console.log('Keluar');

    fetch('https://nsj-trash.herokuapp.com/api/logout', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.token}`,
      },
      // body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('ini response', response);
        if (response.status === 'success') {
          ToastAndroid.show('Behasil Keluar', 1000);
          this.props.navigation.replace('Login');
          AsyncStorage.removeItem(
            'token',
            this.props.navigation.replace('Login'),
          );
        } else {
          alert('Gagal Keluar');
        }
      })
      .catch((error) => console.log(error));
  }
  getData() {
    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/pengurus2/riwayatpenjualan', {
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
        if (responseJson) {
          this.setState({
            data2: responseJson.data,
            refresh: false,
            loading: false,
          });
          // this.setState({data2: responseJson});

          // this.setState({loading: true});
          // console.log(responseJ);
        } else {
          console.log('ini else', response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onRefreshControl() {
    this.setState({refresh: true});
    this.getData(), this.getPengurus2();
    // this.getJenissampah();
  }
  render() {
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
          <View>
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refresh}
                  onRefresh={() => this.onRefreshControl()}
                />
              }>
              <View style={styles.header}>
                {/* <View style={styles.viewname}> */}
                <View>
                  <Text style={styles.txthi}>Halo {this.state.data.name}</Text>
                  <Text style={styles.txthave}>
                    Sudah menjual sampah hari ini ?
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
                  style={styles.img2}
                />
                {/* </View> */}
              </View>
              <View style={styles.viewexit}>
                <TouchableOpacity
                  style={styles.touchexit}
                  onPress={() => this.logOut()}>
                  <Image
                    source={require('../Assets/exit.png')}
                    style={styles.imgexit}
                  />
                  <Text>Keluar</Text>
                </TouchableOpacity>
              </View>
              <View>
                {this.state.data2.map((item, index) => {
                  return (
                    <View key={index} style={styles.view1}>
                      <View style={styles.view2}>
                        <View>
                          <Text style={styles.txtnama}>
                            {item.nama_pengepul}
                          </Text>
                          <Text style={styles.txttelpon}>{item.telpon}</Text>
                        </View>
                        <Text style={styles.txttanggal}>{item.created_at}</Text>
                      </View>
                      <View style={styles.view3}>
                        <Image
                          source={
                            item.jenis_sampah_id == 1
                              ? require('../Assets/paper.png')
                              : item.jenis_sampah_id == 2
                              ? require('../Assets/plastic.png')
                              : require('../Assets/wrench.png')
                          }
                          style={styles.img}
                        />
                        <Text style={styles.txtberat}>{item.berat}Kg</Text>
                      </View>
                      <View style={styles.view4}>
                        {/* <Text style={styles.txtalamat}>{item.alamat}</Text> */}
                        <Text style={styles.txttotal}>Rp.{item.total},-</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
              <View style={{width: '100%', height: 40}}></View>
            </ScrollView>
            <TouchableOpacity
              style={styles.touchplus}
              onPress={() => this.props.navigation.navigate('Datajual')}>
              <Image
                source={require('../Assets/Plus.png')}
                style={styles.imgplus}
              />
            </TouchableOpacity>
          </View>
        )}

        {/* <View style={styles.viewall}>
            <TouchableOpacity style={styles.touch} onPress={()=>this.props.navigation.navigate("Riwayatpenjualan")}></TouchableOpacity>
            <TouchableOpacity style={styles.touch2}></TouchableOpacity>
          </View> */}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};

export default connect(mapStateToProps)(Home2);
