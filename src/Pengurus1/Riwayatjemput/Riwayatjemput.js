import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  ToastAndroid,
} from 'react-native';
import {styles} from './Styleriwayatjemput';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

// import { TextInput } from 'react-native-paper';
// import { TextInput } from 'react-native-paper';

class Riwayatjemput extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      modalVisible2: false,
      selesai: '',
      loading: false,
    };
  }
  componentDidMount() {
    console.log('ini TOKENKU', this.props.userToken.userReducer.token);
    this.getRiwayatjemput();
  }
  getRiwayatjemput() {
    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/pengurus1/riwayatjemput', {
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
  selesaiJemput() {
    fetch(
      `https://nsj-trash.herokuapp.com/api/pengurus1/selesaijemput/${
        this.state.data[this.state.selesai].id
      }`,
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
        console.log('ini Dia', responseJson);
        // console.log(responseJson);
        // const {status} = responseJson;
        if (responseJson.status == 'success') {
          this.props.navigation.navigate('Home2');
          // this.setState({loading: true});
          ToastAndroid.show('Berhasil', 1000);
          this.setModalVisible2(!this.state.modalVisible2);
        } else {
          console.log('ini else', responseJson);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

  
  setModalVisible2 = (visible, index) => {
    this.setState({modalVisible2: visible, selesai: index});
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.loading !== false ? (
            <View>
              <LottieView
                source={require('../../Assets/28724-loading-v3.json')}
                autoPlay={true}
                style={styles.imgloading}
              />
              <Text style={styles.txttunggu}>Tunggu Sebentar...</Text>
              <View style={{width:'10%',height:30,marginTop:'30%'}}></View>
            </View>
          ) : (
            <View>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                  style={styles.touchback}>
                  <Image
                    source={require('../../Assets/arrow.png')}
                    style={styles.imgback}
                  />
                </TouchableOpacity>
                <Text style={styles.txtback}>Harusjemput</Text>
              </View>
              <View>
                <View>
                  {this.state.data == null ? (
                    <View>
                      <LottieView
                        source={require('../../Assets/16656-empty-state.json')}
                        autoPlay={true}
                        style={styles.imgkosong}
                      />
                      <Text style={styles.txtdata}>Data Kosong</Text>
                    </View>
                  ) : (
                    <View>
                      <View>
                        {this.state.data.map((item, index) => {
                          return (
                            <View
                              key={index}
                              style={styles.touchdata}
                              >
                              <View style={styles.view1}>
                                <View style={styles.viewimgfoto}>
                                  <Image
                                    source={{uri: item.foto_sampah}}
                                    style={styles.imgfoto}
                                  />
                                </View>
                                <View style={styles.view12}>
                                  <View style={styles.view13}>
                                    <Text style={styles.txtnama}>
                                      {item.nama}
                                    </Text>
                                    <Text style={styles.txttelpon}>
                                      {item.telpon}
                                    </Text>
                                  </View>
                                  <Text style={styles.txttanggal}>
                                    {item.tanggal}
                                  </Text>
                                </View>
                              </View>
                              <View style={styles.view2}>
                                <View style={{width: '24%', height: 80}}></View>
                                <Image
                                  source={require('../../Assets/address.png')}
                                  style={styles.imgalamat}
                                />
                                <Text style={styles.txtalamat}>
                                  {item.alamat}
                                </Text>
                              </View>
                              <View style={styles.view3}>
                                <View style={{width: '75%', height: 75}}></View>
                                <TouchableOpacity
                                  style={styles.touchtolak}
                                  onPress={()=>this.props.navigation.navigate("Chatidpengurus2",{item:item})}
                                  >
                                  <Image source={require('../../Assets/blackchat.png')} style={styles.imgchat}/>
                                </TouchableOpacity>
                                {/* <TouchableOpacity
                                  style={styles.touchterima}
                                  onPress={() => {
                                    this.setModalVisible2(true, index);
                                  }}>
                                  <Text style={styles.txtterima}>Selesai</Text>
                                </TouchableOpacity> */}
                              </View>
                            </View>
                          );
                        })}
                      </View>
                    </View>
                  )}
                </View>
              </View>
            </View>
          )}

         
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible2}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.containermodal}>
              <View style={styles.viewmodal}>
                <Text style={styles.txttanya}>
                  Apa anda yakin ingin sudah selesai?
                </Text>
                <View style={styles.viewtanya}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible2(!this.state.modalVisible2);
                    }}>
                    <Text style={styles.txt}>Tidak</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.selesaiJemput()}>
                    <Text style={styles.txt}>Ya</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
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

export default connect(mapStateToProps)(Riwayatjemput);
