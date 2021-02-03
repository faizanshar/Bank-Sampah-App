import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {styles} from './Stylechatidnasabah';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import Pusher from 'pusher-js/react-native';

class Chatidnasabah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      pesan: '',
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
      this.getPesan()
    });
  }
  getPesan() {
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
          this.setState({data: responseJson.data});
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
  getUser() {
    fetch(`https://nsj-trash.herokuapp.com/api/nasabah`, {
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
            source={{uri: this.props.route.params.item.foto}}
            style={styles.img}
          />
          <Text style={styles.txt}>{this.props.route.params.item.alamat}</Text>
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
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};

export default connect(mapStateToProps)(Chatidnasabah);
