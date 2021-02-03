import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './Styleriwayatbarang';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

class Riwayatbarang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log('INI TOKEN', this.props.userToken.userReducer);
    this.getBarang();
  }

  getBarang() {
    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/nasabah/riwayatbarang', {
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
          this.setState({data: responseJson.barang, loading: false});
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
          <View style={{flex: 1}}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.touchback}
                onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../../Assets/arrow.png')}
                  style={styles.imgback}
                />
              </TouchableOpacity>
              <Text style={styles.txtback}>Riwayat Sampah</Text>
            </View>
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
              <View style={{flex: 1}}>
                <Image
                  source={require('../../Assets/sampahku.jpg')}
                  style={styles.imgsampahku}
                />
                <ScrollView style={styles.scroll}>
                  <View style={{padding: 20}}>
                    {this.state.data.map((item, index) => {
                      return (
                        <View key={index}>
                          {item.keterangan == 1 ? (
                            <View style={styles.viewbarang} key={index}>
                              <Image
                                source={{uri: item.foto_sampah}}
                                style={styles.imgsampah}
                              />
                              <View>
                                <Text style={styles.txtsampah}>
                                  {item.jenis_sampah}
                                </Text>
                                <Text style={styles.txtberat}>
                                  {item.berat}Kg
                                </Text>
                              </View>
                              <View>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                  }}>
                                  <Image
                                    source={require('../../Assets/jemput.png')}
                                    style={styles.imgmobil}
                                  />
                                  <Text style={styles.txttanggal}>
                                    {item.created_at}
                                  </Text>
                                </View>
                                <Text style={styles.txtharga}>
                                  Rp.{item.harga_sampah},-
                                </Text>
                              </View>
                            </View>
                          ) : (
                            <View style={styles.viewbarang} key={index}>
                              <Image
                                source={{uri: item.foto_sampah}}
                                style={styles.imgsampah}
                              />
                              <View>
                                <Text style={styles.txtsampah}>
                                  {item.jenis_sampah}
                                </Text>
                                <Text style={styles.txtberat}>
                                  {item.berat}Kg
                                </Text>
                              </View>
                              <View>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                  }}>
                                  <Image
                                    source={require('../../Assets/house.png')}
                                    style={styles.imghouse}
                                  />
                                  <Text style={styles.txttanggal}>
                                    {item.created_at}
                                  </Text>
                                </View>
                                <Text style={styles.txtharga}>
                                  Rp.{item.harga_sampah},-
                                </Text>
                              </View>
                            </View>
                          )}
                        </View>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
            )}
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

export default connect(mapStateToProps)(Riwayatbarang);
