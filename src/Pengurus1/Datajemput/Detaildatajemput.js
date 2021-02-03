import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './Styledetaildatajemput';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

class Detaildatajemput extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    console.log('ini ITEMnya', this.props.route.params.item);
    console.log('ini TOKENSaya', this.props.userToken.userReducer.token);
    this.getDatajemput();
  }
  getDatajemput() {
    this.setState({loading: true});
    fetch(
      `https://nsj-trash.herokuapp.com/api/pengurus1/datajemput/${this.props.route.params.item.id}`,
      {
        method: 'GET',
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
        },
      },
    )
      .then((responseJson) => responseJson.json())
      .then((responseJson) => {
        console.log('ini DDIA', responseJson);
        // console.log(responseJson);
        // const {status} = responseJson;
        if (responseJson) {
          this.setState({
            data: responseJson.data,
            refresh: false,
            loading: false,
          });
          console.log('ini foto', this.state.data[0].foto_sampah);
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
  render() {
    return (
      <View style={styles.container}>
        {this.state.data == '' ? (
          <View>
            <LottieView
              source={require('../../Assets/28724-loading-v3.json')}
              autoPlay={true}
              style={styles.imgloading}
            />
            <Text style={styles.txttunggu}>Tunggu Sebentar...</Text>
            <View style={{width: '10%', height: 30}}></View>
          </View>
        ) : (
          <View>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.touchback}
                onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../../Assets/arrow.png')}
                  style={styles.imgback}
                />
              </TouchableOpacity>
              <Text style={styles.txtback}>Detail</Text>
            </View>

            <View style={styles.viewimg}>
              <Image
                source={{uri: this.state.data[0].foto_sampah}}
                style={styles.imgsampah}
              />
            </View>

            <View style={styles.viewnama}>
              <View style={styles.viewimgnama}>
                {this.state.data[0].foto_user == null ? (
                  <View>
                    <Image
                      source={{
                        uri:
                          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==',
                      }}
                      style={styles.imgnama}
                    />
                  </View>
                ) : (
                  <View>
                    <Image
                      source={{uri: this.state.data[0].foto_user}}
                      style={styles.imgnama}
                    />
                  </View>
                )}
              </View>
              <Text style={styles.txtnama}>{this.state.data[0].user_nama}</Text>
            </View>
            <View style={styles.viewall}>
              <View style={styles.viewimgicon}>
                <View style={styles.viewicon}>
                  <Image
                    source={require('../../Assets/emailgray.png')}
                    style={styles.imgall}
                  />
                </View>
                <View style={styles.viewicon}>
                  <Image
                    source={require('../../Assets/callpenjemput.png')}
                    style={styles.imgall}
                  />
                </View>
                <View style={styles.viewicon}>
                  <Image
                    source={require('../../Assets/time.png')}
                    style={styles.imgall}
                  />
                </View>
                <View style={styles.viewicon}>
                  <Image
                    source={require('../../Assets/mappenjemput.png')}
                    style={styles.imgall}
                  />
                </View>
              </View>
              <View style={styles.viewtxt}>
                <Text style={styles.txt}>{this.state.data[0].user_email}</Text>
                <Text style={styles.txt}>{this.state.data[0].user_telpon}</Text>
                <Text style={styles.txt}>{this.state.data[0].tanggal}</Text>
                <Text style={styles.txt}>{this.state.data[0].user_alamat}</Text>
              </View>
            </View>
          </View>
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

export default connect(mapStateToProps)(Detaildatajemput);
