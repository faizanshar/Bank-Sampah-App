import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import {styles} from './Stylependataanantar';
import {Picker} from '@react-native-community/picker';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';


class Pendataanantar extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      jenissampah: '1',
      keterangan: '2',
      berat: '',
      loading: false,
      loading2: false,
    };
  }
  componentDidMount() {
    console.log('INI ITEM', this.props.route.params.item);
    console.log('ini TOKENKU', this.props.userToken.userReducer.token);
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

    const {jenissampah, keterangan, berat} = this.state;
    const formData = new FormData();
    formData.append('jenis_sampah_id', jenissampah);
    formData.append('keterangan', keterangan);
    formData.append('berat', berat);
    console.log('ini', keterangan);
    // formData.append('url_alamat', url);
    // formData.append('penjemput_id', penjemput);
    // formData.append('foto', {
    //   uri: this.state.uri,
    //   type: 'image/jpeg',
    //   name: this.state.fileName,
    // });

    this.setState({loading2: true});
    fetch(
      `https://nsj-trash.herokuapp.com/api/pengurus1/pendataan/${this.props.route.params.item.id}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
        },
        body: formData,
      },
    )
      .then((response) => response.json())
      .then((response) => {
        console.log('ini response', response);
        if (response.status === 'success') {
          ToastAndroid.show('Berhasil Mendata!', 1000);
          this.props.navigation.navigate('Home2');
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
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
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
          <ScrollView>
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
            <View style={styles.viewpicker2}>
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
            <View style={styles.viewdata}>
              <TextInput
                placeholder={' Berat'}
                keyboardType={'number-pad'}
                style={styles.inputberat}
                onChangeText={(berat) => this.setState({berat})}
              />

              {/* <View style={styles.viewpicker}>
              <Picker
                selectedValue={this.state.keterangan.toString()}
                onValueChange={(Item, index) =>
                  this.setState({keterangan: Item})
                }>
                <Picker.Item label='Dijemput' value='1' color={'gray'} />
                <Picker.Item label='Diantar' value='2' color={'gray'} />
              </Picker>
            </View> */}
              {/* <View></View> */}
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
            <View style={{width: '100%', height: 20}}></View>
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

export default connect(mapStateToProps)(Pendataanantar);
