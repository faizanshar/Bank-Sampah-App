import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import {styles} from './Styledatajual';
import {connect} from 'react-redux';
import {Picker} from '@react-native-community/picker';
import {ScrollView} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

class Datajual extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      nama: '',
      telpon: '',
      berat: '',
      jenissampah: '',
      alamat: '',
      refresh: false,
      loading: false,
      loading2: false,
    };
  }
  componentDidMount() {
    console.log('ini datakucung', this.props.userToken.userReducer.token);
    this.getJenissampah();
  }
  getJenissampah() {
    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/pengurus1/jenissampah', {
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
            data: responseJson.jenissampah,
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
  Adddata = () => {
    console.log('mulai Mengirim');

    const {nama, telpon, berat, jenissampah, alamat} = this.state;
    const formData = new FormData();

    formData.append('nama_pengepul', nama);
    formData.append('telpon', telpon);
    formData.append('berat', berat);
    formData.append('jenis_sampah_id', jenissampah);
    formData.append('alamat', alamat);

    // formData.append('url_alamat', url);
    // formData.append('penjemput_id', penjemput);
    // formData.append('foto', {
    //   uri: this.state.uri,
    //   type: 'image/jpeg',
    //   name: this.state.fileName,
    // });

    this.setState({loading2: true});
    fetch(`https://nsj-trash.herokuapp.com/api/pengurus2/penjualan`, {
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
          ToastAndroid.show('Berhasil Mendata!', 1000);
          this.props.navigation.navigate('Home3');
          this.setState({loading2: false});
        } else {
          ToastAndroid.show('Gagal Mendata', 1000);
          this.setState({loading2: false});
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading2: false});
        ToastAndroid.show('Gagal Membuat Permintaan', 1000);
      });
    // ToastAndroid.show('Gagal Membuat Permintaan,1000');
  };
  onRefreshControl() {
    this.setState({refresh: true});
    this.getJenissampah();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.loading !== false ? (
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
          <ScrollView
            style={{flex: 1}}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refresh}
                onRefresh={() => this.onRefreshControl()}
              />
            }>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={styles.touchback}>
                <Image
                  source={require('../../Assets/arrow.png')}
                  style={styles.imgback}
                />
              </TouchableOpacity>
              <Text style={styles.txtback}>Pendataan</Text>
            </View>
            <View style={styles.viewnama}>
              <TextInput
                placeholder={' nama'}
                style={styles.inputnama}
                onChangeText={(nama) => this.setState({nama})}
              />
            </View>
            <View style={styles.viewtelpon}>
              <TextInput
                placeholder={' telpon'}
                style={styles.inputtelpon}
                keyboardType={'number-pad'}
                onChangeText={(telpon) => this.setState({telpon})}
              />
            </View>
            <View style={styles.viewdata}>
              <View style={styles.viewberat}>
                <TextInput
                  placeholder={' berat'}
                  keyboardType={'number-pad'}
                  style={styles.inputberat}
                  onChangeText={(berat) => this.setState({berat})}
                />
              </View>
              <View style={styles.viewpicker}>
                <Picker
                  selectedValue={this.state.jenissampah}
                  onValueChange={(item, index) =>
                    this.setState({jenissampah: item})
                  }>
                  {this.state.data.map((item, index) => {
                    return (
                      <Picker.Item
                        key={index}
                        label={item.jenis}
                        value={item.id}
                        color={'gray'}
                      />
                    );
                  })}
                </Picker>
              </View>
              {/* <View></View> */}
            </View>
            <View style={styles.viewalamat}>
              <TextInput
                placeholder={' alamat'}
                style={styles.inputalamat}
                multiline={true}
                textAlignVertical={'top'}
                onChangeText={(alamat) => this.setState({alamat})}
              />
            </View>
            <TouchableOpacity
              style={styles.touchdata}
              onPress={() => this.Adddata()}>
              {this.state.loading2 == false ? (
                <Text style={styles.txtdata}>Data</Text>
              ) : (
                <LottieView
                  source={require('../../Assets/5814-loading.json')}
                  autoPlay={true}
                  style={styles.imgloading2}
                />
              )}
            </TouchableOpacity>
            <View style={{width: '100%', height: 30}}></View>
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

export default connect(mapStateToProps)(Datajual);
