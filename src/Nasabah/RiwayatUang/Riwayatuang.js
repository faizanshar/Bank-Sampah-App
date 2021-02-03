import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {styles} from './Styleriwayatuang';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

class Riwayatuang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  }
  componentDidMount() {
    console.log('INI adalah Token', this.props.userToken.userReducer.token);
    this.getUang();
  }

  getUang() {
    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/nasabah/riwayatuang', {
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
          this.setState({data: responseJson.uang, loading: false});
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
                onPress={() => this.props.navigation.goBack()}
                style={{
                  width: '12%',
                  marginLeft: '2%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../Assets/arrow.png')}
                  style={{
                    width: '70%',
                    height: 30,
                    marginLeft: '10%',
                  }}
                />
              </TouchableOpacity>
              <Text style={styles.txtback}>Riwayatuang</Text>
            </View>
            {this.state.data.length == 0 ? (
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
                  source={require('../../Assets/uangku.jpg')}
                  style={styles.imguangku}
                />
                <ScrollView style={styles.scroll}>
                  <View style={{padding: 20}}>
                    {this.state.data.map((item, index) => {
                      return (
                        <>
                          {item.debit !== 0 ? (
                            <View key={index} style={styles.viewmoney}>
                              <Image
                                source={require('../../Assets/hijau.png')}
                                style={styles.imgdebit}
                              />
                              <View>
                                <Text style={styles.txtdebit2}>
                                  {item.created_at}
                                </Text>
                                <Text style={styles.txtdebit}>
                                  Rp.{item.debit}
                                </Text>
                              </View>
                            </View>
                          ) : (
                            <View key={index} style={styles.viewmoney}>
                              <Image
                                source={require('../../Assets/merah.png')}
                                style={styles.imgdebit}
                              />
                              <View>
                                <Text style={styles.txtdebit2}>
                                  {item.created_at}
                                </Text>
                                <Text style={styles.txtkredit}>
                                  -Rp.{item.kredit}
                                </Text>
                              </View>
                            </View>
                          )}
                        </>
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

export default connect(mapStateToProps)(Riwayatuang);
