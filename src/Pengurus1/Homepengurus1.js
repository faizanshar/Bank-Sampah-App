import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  RefreshControl,
  ToastAndroid
} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './Stylehome1';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Homepengurus1 extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: false,
      refresh: false,
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
    this.getPengurus1();
  }
  onRefreshControl() {
    this.setState({refresh: true});
    this.getPengurus1();
  }
  getPengurus1() {
    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/pengurus1', {
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
          <ScrollView
            style={{width: '100%'}}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refresh}
                onRefresh={() => this.onRefreshControl()}
              />
            }>
            <View style={styles.header}>
              <View style={styles.viewname}>
                <View>
                  <Text style={styles.txthi}>Halo {this.state.data.name}</Text>
                  <Text style={styles.txthave}>
                    Sudah mendapat sampah hari ini ?
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
                {/* <View style={styles.viewtouch}> */}
                <TouchableOpacity
                  style={styles.touch}
                  onPress={() => this.props.navigation.navigate('Datajemput')}>
                  <Image
                    source={require('../Assets/File.png')}
                    style={styles.imgdata}
                  />
                  <Text style={styles.txt}>Datajemput</Text>
                  <Image
                    source={require('../Assets/blackarrow.png')}
                    style={styles.imgarrow}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touch}
                  onPress={() => this.props.navigation.navigate('Harusjemput')}>
                  <Image
                    source={require('../Assets/jemput.png')}
                    style={styles.imgtruck}
                  />
                  <Text style={styles.txt}>Harusjemput</Text>
                  <Image
                    source={require('../Assets/blackarrow.png')}
                    style={styles.imgarrow}
                  />
                </TouchableOpacity>
                {/* </View> */}
                {/* <View style={styles.viewtouch2}> */}
                <TouchableOpacity
                  style={styles.touch}
                  onPress={() =>
                    this.props.navigation.navigate('Riwayatjemput')
                  }>
                  <Image
                    source={require('../Assets/Clock.png')}
                    style={styles.imgclock}
                  />
                  <Text style={styles.txt}>Riwayatjemput</Text>
                  <Image
                    source={require('../Assets/blackarrow.png')}
                    style={styles.imgarrow}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touch}
                  onPress={() => this.props.navigation.navigate('Pendataan2')}>
                  <Image
                    source={require('../Assets/Register.png')}
                    style={styles.imgregister}
                  />
                  <Text style={styles.txt}>Pendataan</Text>
                  <Image
                    source={require('../Assets/blackarrow.png')}
                    style={styles.imgarrow}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touch}
                  onPress={() => this.props.navigation.navigate('Pendataan2')}
                  onPress={() => this.logOut()}>
                  <Image
                    source={require('../Assets/logout2.png')}
                    style={styles.imgexit}
                  />
                  <Text style={styles.txt}>Keluar</Text>
                  <Image
                    source={require('../Assets/blackarrow.png')}
                    style={styles.imgarrow}
                  />
                </TouchableOpacity>
                {/* </View> */}
                {/* <TouchableOpacity style={styles.touch}>
                <Image
                  source={require('../Assets/exit.png')}
                  style={styles.imgexit}
                />
              </TouchableOpacity> */}
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

export default connect(mapStateToProps)(Homepengurus1);
