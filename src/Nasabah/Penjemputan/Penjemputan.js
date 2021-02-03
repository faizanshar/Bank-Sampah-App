import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {styles} from './Stylepenjemputan';
import {Picker} from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';
// import ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {ScrollView} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import {connect} from 'react-redux';

// import {Item} from 'react-native-paper/lib/typescript/components/List/List';

class Penjemputan extends Component {
  constructor() {
    super();
    this.state = {
      nama: '',
      telpon: '',
      alamat: '',
      penjemput: '',
      srcImg: '',
      uri: '',
      fileName: '',
      url:'',
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
   this.getPenjemput();
   console.log('INIADATOKEN',this.props.userToken.userReducer.token);
  }

  Addproduct = () => {
    console.log('mulai Mengirim');

    const {nama, telpon, alamat, penjemput,url} = this.state;
    const formData = new FormData();

    formData.append('nama', nama);
    formData.append('telpon', telpon);
    formData.append('alamat', alamat);
    formData.append('url_alamat', url);
    formData.append('penjemput_id', penjemput);
    formData.append('foto', {
      uri: this.state.uri,
      type: 'image/jpeg',
      name: this.state.fileName,
    });

    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/nasabah/penjemputan', {
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

  getPenjemput() {
    fetch('https://nsj-trash.herokuapp.com/api/nasabah/penjemput', {
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
          this.setState({data: responseJson.penjemput});
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
        <ScrollView style={{width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '2%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.touchback}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../Assets/arrow.png')}
                style={styles.imgback}
              />
            </TouchableOpacity>
            <Text style={styles.txtback}>Penjemputan</Text>
          </View>
          <LottieView
            source={require('../../Assets/12587-delivery-address.json')}
            autoPlay={true}
            style={styles.imgloading}
          />
          <View style={styles.header}>
            <TextInput
              placeholder={' nama'}
              style={styles.inputnama}
              onChangeText={(nama) => this.setState({nama})}
            />
            <TextInput
              placeholder={' telpon'}
              style={styles.inputtelpon}
              onChangeText={(telpon) => this.setState({telpon})}
              keyboardType={'number-pad'}
            />
            <TextInput
              placeholder={' url alamat'}
              style={styles.inputtelpon}
              onChangeText={(url) => this.setState({url})}
              // keyboardType={'number-pad'}
            />
            <TextInput
              placeholder={' alamat'}
              style={styles.inputalamat}
              textAlignVertical={'top'}
              multiline={true}
              onChangeText={(alamat) => this.setState({alamat})}
            />
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <View style={styles.viewpicker}>
                <Picker
                  selectedValue={this.state.penjemput}
                  onValueChange={(item, index) =>
                    this.setState({penjemput: item})
                  }>
                  {this.state.data.map((item, index) => {
                    return <Picker.Item key={index} label={item.alamat} value={item.id}  />;
                  })}
                </Picker>
              </View>
              <TouchableOpacity
                onPress={() => this.choosePicture()}
                style={{
                  width: '30%',
                  backgroundColor: '#fff',
                  marginTop: '10%',
                  elevation: 8,
                  // alignSelf: 'center',
                }}>
                <Image
                  source={
                    this.state.uri
                      ? {
                          uri: this.state.uri,
                        }
                      : {
                          uri:
                            'https://image.shutterstock.com/image-vector/add-icon-plus-vector-260nw-454078798.jpg',
                        }
                  }
                  style={styles.img}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => this.Addproduct()}
              style={styles.touchjemput}>
              {this.state.loading == false ? (
                <Text style={styles.txtjemput}>Minta jemput</Text>
              ) : (
                <LottieView
                  source={require('../../Assets/5814-loading.json')}
                  autoPlay={true}
                  style={styles.imgloading2}
                />
              )}
            </TouchableOpacity>
          </View>
          {/* <TextInput placeholder={'nama'}/> */}
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

export default connect(mapStateToProps)(Penjemputan);