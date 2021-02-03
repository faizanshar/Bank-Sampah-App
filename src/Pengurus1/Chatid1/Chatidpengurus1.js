import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {styles} from './Stylechatid1';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import Pusher from 'pusher-js/react-native';
import LottieView from 'lottie-react-native';

class Chatid1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      pesan: '',
      loading: false,
    };
  }
  componentDidMount() {
    console.log(this.props.route.params.item);
    console.log('foto', this.props.route.params.item.foto);
    console.log('alamat', this.props.route.params.item.alamat);
    console.log('INI TOKEN', this.props.userToken.userReducer);
    this.getPesan();
    this.getUser();
    Pusher.logToConsole = true;

    var pusher = new Pusher('17384868cdc7bd11afa9', {
      cluster: 'ap1',
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data) => {
      // alert(JSON.stringify(data));
      this.getPesan();
    });
  }
  getPesan() {
    this.setState({loading: true});

    fetch(
      `https://nsj-trash.herokuapp.com/api/pesan/${this.props.route.params.item.id}`,
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
          this.setState({data: responseJson.data, loading: false});
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
  getUser() {
    fetch(`https://nsj-trash.herokuapp.com/api/pengurus1`, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
      },
    })
      .then((responseJson) => responseJson.json())
      .then((responseJson) => {
        // console.log(responseJson);
        // const {status} = responseJson;
        if (responseJson) {
          this.setState({data2: responseJson.user});
          //   this.setState({data2: responseJson});

          this.setState({loading: true});
          // console.log(responseJ);
        } else {
          console.log('ini else', response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  Pesan = () => {
    console.log('mulai Mengirim');
    console.log('initokennn', this.props.userToken.userReducer.token);
    const {pesan} = this.state;
    const formData = new FormData();

    formData.append('pesan', pesan);
    // formData.append('password', password);

    this.setState({loading: true});
    this.setState({pesan: ''});
    fetch(
      `https://nsj-trash.herokuapp.com/api/pesan/${this.props.route.params.item.id}`,
      {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
        },
        body: formData,
      },
    )
      .then((response) => response.json())
      .then((response) => {
        // const {error} = response;

        // this.props.userLogin(token);

        console.log('ini response', response);
        if (response.status == 'success') {
          ToastAndroid.show('Berhasil terkirim', 1000);
          //   AsyncStorage.setItem('token', token);
          //   this.props.navigation.replace('Home1');
          // this.props.userLogin(token);

          //   this.setState({loading: false});
        } else {
          ToastAndroid.show('GAGAL', 1000);
          this.setState({loading: false});
        }
      })
      .catch((error) => {
        console.log(error);
        // this.setState({loading: false});
        ToastAndroid.show('GAGALAGA', 1000);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        {/* {this.state.loading !== false ? (
          <View>
            <LottieView
              source={require('../../Assets/28724-loading-v3.json')}
              autoPlay={true}
              style={styles.imgloading}
            />
            <Text style={styles.txttunggu}>Tunggu Sebentar...</Text>
            <View style={{width: '10%', height: 30}}></View>
          </View>
        ) : ( */}
          <View style={{flex:1}}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.touchback}
                onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../../Assets/arrow.png')}
                  style={styles.imgback}
                />
              </TouchableOpacity>
              <Image
                source={
                  this.props.route.params.item.foto
                    ? {uri: this.props.route.params.item.foto}
                    : {
                        uri:
                          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==',
                      }
                }
                style={styles.img}
              />
              <Text style={styles.txt}>
                {this.props.route.params.item.name}
              </Text>
            </View>
            <ScrollView
              style={{width: '100%'}}
              ref={(ref) => {
                this.scrollView = ref;
              }}
              onContentSizeChange={() =>
                this.scrollView.scrollToEnd({animated: true})
              }>
              {this.state.data.map((item, index) => {
                if (item.from === this.state.data2.id) {
                  return (
                    <View style={styles.view1} key={index}>
                      <Text style={styles.txtupdate}>{item.updated_at}</Text>
                      <View
                        // key={index}
                        style={{
                          alignSelf: 'flex-end',
                          backgroundColor: '#c4ffc4',
                          margin: 3,
                          marginRight: 10,
                          borderRadius: 5,
                          marginTop: 10,
                          // borderTopRightRadius:50,
                          marginBottom: 10,
                          letterSpacing: 3,
                          // width:'80%',
                          marginLeft: 10,
                          maxWidth: '80%',
                          elevation: 8,
                          minWidth: '15%',
                          // alignItems:'center',
                          // justifyContent:'center'
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            marginTop: 10,
                            marginBottom: 10,
                            marginRight: 5,
                            marginLeft: 10,
                          }}>
                          {item.pesan}
                        </Text>
                        <Text style={styles.txtwaktu}>{item.created_at}</Text>
                      </View>
                    </View>
                  );
                } else {
                  return (
                    <View style={styles.view2} key={index}>
                      <Text style={styles.txtupdate}>{item.updated_at}</Text>

                      <View
                        // key={index}
                        style={{
                          alignSelf: 'flex-start',
                          backgroundColor: '#ffff',
                          margin: 3,
                          marginLeft: 10,
                          display: 'flex',
                          borderRadius: 10,
                          marginTop: 10,
                          marginBottom: 10,
                          maxWidth: '80%',
                          elevation: 8,
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            marginTop: 10,
                            marginBottom: 10,
                            marginRight: 10,
                            marginLeft: 10,
                          }}>
                          {item.pesan}
                        </Text>
                        <Text style={styles.txtwaktu2}>{item.created_at}</Text>
                      </View>
                      {/* <Text style={styles.txtwaktu2}>{item.created_at}</Text> */}
                    </View>
                  );
                }
              })}
            </ScrollView>
            <View style={styles.viewsend}>
              <TextInput
                style={styles.inputsend}
                multiline={true}
                value={this.state.pesan}
                onChangeText={(pesan) => this.setState({pesan})}
              />
              <TouchableOpacity
                onPress={() => this.Pesan()}
                style={{width: '100%'}}>
                <Image
                  style={styles.imgsend}
                  source={require('../../Assets/plane.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        {/* )} */}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};

export default connect(mapStateToProps)(Chatid1);
