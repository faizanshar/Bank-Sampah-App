import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ToastAndroid,
  ScrollView,
  TextInput,
} from 'react-native';
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import {styles} from './Styleprofile';
import {connect} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import LottieView from 'lottie-react-native';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      // data: {},
      srcImg: '',
      uri: '',
      fileName: '',
      nama: '',
      alamat: '',
      method: 'put',
      loading: false,
    };
  }
  componentDidMount() {
    console.log('INI DATA', this.props.route.params);
    const {item} = this.props.route.params;
    this.setState({
      nama: item.name,
      alamat: item.alamat,
      uri: item.foto,
    });
    // this.getNasabah();
    console.log('INIADATOKEN', this.props.userToken.userReducer.token);
  }
  editProfile = () => {
    console.log('mulai Mengirim');

    const {nama, alamat, method} = this.state;
    const formData = new FormData();

    formData.append('name', nama);
    formData.append('alamat', alamat);
    formData.append('_method', method);
    if (this.state.uri !== '' || this.state.fileName !== '') {
      formData.append('foto', {
        uri: this.state.uri,
        type: 'image/jpeg',
        name: this.state.fileName,
      });
    }

    console.log('Ini data From Data', formData);
    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/editprofil', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('ini response', response);
        if (response.status === 'success') {
          ToastAndroid.show('Berhasil Membuat Permintaan!', 1000);
          this.props.navigation.navigate('Home');
          this.setState({loading: false});
        } else {
          ToastAndroid.show('Gagal Membuat Permintaan,1000');
          this.setState({loading: false});
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show('Gagal Membuat Permintaan', 1000);
      });
    // ToastAndroid.show('Gagal Membuat Permintaan,1000');
  };
  choosePicture = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ' + response);
      if (response.didCancel) {
        console.log('user cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button', response.customButton);
      } else {
        console.log(response);
        if (response.fileSize >= 2000000) {
          alert('Foto kegedean');
        } else {
          this.setState({
            srcImg: {uri: response.uri},
            uri: response.uri,
            fileName: response.fileName,
          });
        }
      }
    });
  };
  // getNasabah() {
  //   fetch('http://nsj-trash.herokuapp.com/api/nasabah', {
  //     method: 'GET',
  //     headers: {
  //       // 'Content-Type': 'application/json',
  //       Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
  //     },
  //   })
  //     .then((responseJson) => responseJson.json())
  //     .then((responseJson) => {
  //       // console.log(responseJson);
  //       // const {status} = responseJson;
  //       if (responseJson) {
  //         this.setState({data: responseJson.user});
  //         //   this.setState({data2: responseJson});

  //         // this.setState({loading: true});
  //         // console.log(responseJ);
  //       } else {
  //         console.log('ini else', response);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../Assets/arrow.png')}
                style={styles.imgback}
              />
            </TouchableOpacity>
            <Text style={styles.txtback}>Profile</Text>
          </View>
          <TouchableOpacity
            style={styles.touchimg}
            onPress={() => this.choosePicture()}>
            <Image
              source={
                this.state.uri
                  ? {uri: this.state.uri}
                  : {
                      uri:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==',
                    }
              }
              style={styles.img}
            />
          </TouchableOpacity>
          <View style={styles.container2}>
            <View style={styles.container3}>
              <View style={styles.viewimgnama}>
                <Image
                  source={require('../../Assets/bulatakun.png')}
                  style={styles.imgnama}
                />
              </View>
              <View style={styles.container31}>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', marginLeft: '5%'}}>
                  Nama:
                </Text>
                <TextInput
                  value={this.state.nama}
                  style={styles.inputnama}
                  onChangeText={(input) => this.setState({nama: input})}
                />
              </View>
            </View>

            <View style={styles.container3}>
              <View style={styles.viewimgnama}>
                <Image
                  source={require('../../Assets/address.png')}
                  style={styles.imgnama}
                />
              </View>
              <View style={styles.container31}>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', marginLeft: '5%'}}>
                  Alamat:
                </Text>
                <TextInput
                  style={styles.inputalamat}
                  value={this.state.alamat}
                  textAlignVertical={'top'}
                  multiline={true}
                  onChangeText={(input) => this.setState({alamat: input})}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => this.editProfile()}
              style={styles.touchedit}>
              {this.state.loading == false ? (
                <Text
                  style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
                  Ubah
                </Text>
              ) : (
                <LottieView
                  source={require('../../Assets/5814-loading.json')}
                  autoPlay={true}
                  style={styles.imgloading}
                />
              )}
            </TouchableOpacity>
          </View>
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

export default connect(mapStateToProps)(Profile);
