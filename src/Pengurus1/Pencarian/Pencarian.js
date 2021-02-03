import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {styles} from './Stylepencarian';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

class Pencarian extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
      nama: '',
      status: {},
    };
  }
  componentDidMount() {
    console.log('INI TOKEN', this.props.userToken.userReducer);
    // this.getKontak();
  }
  getKontak() {
    this.setState({loading: true});
    fetch(
      `https://nsj-trash.herokuapp.com/api/pengurus1/carinasabah/${this.state.nama}`,
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
        // console.log(responseJson);
        // const {status} = responseJson;
        if (responseJson) {
          this.setState({
            data: responseJson.user,
            loading: false,
            status: responseJson,
          });
          //   this.setState({data2: responseJson});

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
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.touchback}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require('../../Assets/arrow.png')}
              style={styles.imgback}
            />
          </TouchableOpacity>
          <View style={styles.viewsearch}>
            <TextInput
              placeholder={' Search'}
              style={styles.inputsearch}
              onChangeText={(nama) => this.setState({nama})}
              keyboardType={'email-address'}
            />
            <TouchableOpacity
              style={styles.touchsearch}
              onPress={() => this.getKontak()}>
              <Image
                source={require('../../Assets/blacksearch.png')}
                style={styles.imgsearch}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          {this.state.data == 0 ? (
            <View style={styles.viewcari}>
              <LottieView
                source={require('../../Assets/37459-searching-contract.json')}
                autoPlay={true}
                style={styles.imgwait}
              />
            </View>
          ) : (
            <View style={{marginTop: '0.5%'}}>
              {this.state.data == null ? (
                <View style={styles.viewcari}>
                    <Image source={require('../../Assets/notfound.jpg')} style={styles.imgwait2}/>
                    <Text style={styles.txtwait2}>Tidak Ditemukan</Text>
                </View>
              ) : (
                <TouchableOpacity
                  style={styles.touchkontak}
                  onPress={() =>
                    this.props.navigation.navigate('Chatidpengurus1', {
                      item: this.state.data,
                    })
                  }>
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
                  <View style={{marginLeft: '5%'}}>
                    <Text style={styles.txtnama}>{this.state.data.name}</Text>
                    <Text style={styles.txtnomor}>{this.state.data.email}</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};

export default connect(mapStateToProps)(Pencarian);
