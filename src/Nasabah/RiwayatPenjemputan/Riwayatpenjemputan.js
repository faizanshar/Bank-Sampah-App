import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {styles} from './Styleriwayatpenjemputan';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

class Riwayatpenjemputan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  }
  componentDidMount() {
    console.log('INITOKEN', this.props.userToken.userReducer.token);
    this.getData();
  }

  getData() {
    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/nasabah/riwayatpenjemputan', {
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
          this.setState({data: responseJson.penjemput, loading: false});
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
              <View style={styles.viewinfo}>
                <Text style={styles.txtback}>Riwayat Penjemputan</Text>
                <TouchableOpacity
                  style={styles.touchinfo}
                  onPress={() =>
                    this.props.navigation.navigate('Informasinasabah')
                  }>
                  <Image
                    source={require('../../Assets/info.png')}
                    style={styles.imginfo}
                  />
                </TouchableOpacity>
              </View>
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
                  source={require('../../Assets/truck.jpg')}
                  style={styles.imgtruck}
                />
                <ScrollView style={styles.scroll}>
                  <View style={{padding: 20}}>
                    {this.state.data.map((item, index) => {
                      return (
                        <View key={index}>
                          {item.status == 1 ? (
                            <View key={index} style={styles.viewdata}>
                              <View style={styles.viewimg}>
                                <Image
                                  source={require('../../Assets/penjemputuser.png')}
                                  style={styles.img}
                                />
                                <Image
                                  source={require('../../Assets/mappenjemput.png')}
                                  style={styles.img}
                                />
                                <Image
                                  source={require('../../Assets/callpenjemput.png')}
                                  style={styles.img}
                                />
                                <Image
                                  source={require('../../Assets/chatpenjemput.png')}
                                  style={styles.img}
                                />
                              </View>
                              <View style={styles.viewuser}>
                                <Text style={styles.txt}>
                                  {item.nama_penjemput}
                                </Text>
                                <Text style={styles.txt}>
                                  {item.alamat_penjemput}
                                </Text>
                                <Text style={styles.txt}>
                                  {item.telpon_penjemput}
                                </Text>
                                <TouchableOpacity style={styles.touchchat} onPress={()=>this.props.navigation.navigate("Chatidnasabah2",{item:item})}>
                                  <Text style={styles.txt1}>chat sekarang</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={styles.viewmenu}>
                                <TouchableOpacity
                                  style={styles.touchmenu}
                                  onPress={() =>
                                    this.props.navigation.navigate(
                                      'Detailnasabah',
                                      {item: item},
                                    )
                                  }>
                                  <Image
                                    source={require('../../Assets/menuku.png')}
                                    style={styles.imgmenu}
                                  />
                                </TouchableOpacity>
                                <Image
                                  source={require('../../Assets/kuningbola.png')}
                                  style={styles.imgbola}
                                />
                              </View>
                            </View>
                          ) : item.status == 2 ? (
                            <View key={index} style={styles.viewdata}>
                              <View style={styles.viewimg}>
                                <Image
                                  source={require('../../Assets/penjemputuser.png')}
                                  style={styles.img}
                                />
                                <Image
                                  source={require('../../Assets/mappenjemput.png')}
                                  style={styles.img}
                                />
                                <Image
                                  source={require('../../Assets/callpenjemput.png')}
                                  style={styles.img}
                                />
                                <Image
                                  source={require('../../Assets/chatpenjemput.png')}
                                  style={styles.img}
                                />
                              </View>
                              <View style={styles.viewuser}>
                                <Text style={styles.txt}>
                                  {item.nama_penjemput}
                                </Text>
                                <Text style={styles.txt}>
                                  {item.alamat_penjemput}
                                </Text>
                                <Text style={styles.txt}>
                                  {item.telpon_penjemput}
                                </Text>
                                <TouchableOpacity style={styles.touchchat} onPress={()=>this.props.navigation.navigate("Chatidnasabah2",{item:item})}>
                                  <Text style={styles.txt1}>chat sekarang</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={styles.viewmenu}>
                                <TouchableOpacity
                                  style={styles.touchmenu}
                                  onPress={() =>
                                    this.props.navigation.navigate(
                                      'Detailnasabah',
                                      {item: item},
                                    )
                                  }>
                                  <Image
                                    source={require('../../Assets/menuku.png')}
                                    style={styles.imgmenu}
                                  />
                                </TouchableOpacity>
                                <Image
                                  source={require('../../Assets/hijaubola.png')}
                                  style={styles.imgbola}
                                />
                              </View>
                            </View>
                          ) : item.status == 3 ? (
                            <View key={index} style={styles.viewdata}>
                              <View style={styles.viewimg}>
                                <Image
                                  source={require('../../Assets/penjemputuser.png')}
                                  style={styles.img}
                                />
                                <Image
                                  source={require('../../Assets/mappenjemput.png')}
                                  style={styles.img}
                                />
                                <Image
                                  source={require('../../Assets/callpenjemput.png')}
                                  style={styles.img}
                                />
                                <Image
                                  source={require('../../Assets/chatpenjemput.png')}
                                  style={styles.img}
                                />
                              </View>
                              <View style={styles.viewuser}>
                                <Text style={styles.txt}>
                                  {item.nama_penjemput}
                                </Text>
                                <Text style={styles.txt}>
                                  {item.alamat_penjemput}
                                </Text>
                                <Text style={styles.txt}>
                                  {item.telpon_penjemput}
                                </Text>
                                <TouchableOpacity style={styles.touchchat} onPress={()=>this.props.navigation.navigate("Chatidnasabah2",{item:item})}>
                                  <Text style={styles.txt1}>chat sekarang</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={styles.viewmenu}>
                                <TouchableOpacity
                                  style={styles.touchmenu}
                                  onPress={() =>
                                    this.props.navigation.navigate(
                                      'Detailnasabah',
                                      {item: item},
                                    )
                                  }>
                                  <Image
                                    source={require('../../Assets/menuku.png')}
                                    style={styles.imgmenu}
                                  />
                                </TouchableOpacity>
                                <Image
                                  source={require('../../Assets/merahbola.png')}
                                  style={styles.imgbola}
                                />
                              </View>
                            </View>
                          ) : item.status == 4 ? (
                            <View key={index} style={styles.viewdata}>
                              <View style={styles.viewimg}>
                                <Image
                                  source={require('../../Assets/penjemputuser.png')}
                                  style={styles.img}
                                />
                                <Image
                                  source={require('../../Assets/mappenjemput.png')}
                                  style={styles.img}
                                />
                                <Image
                                  source={require('../../Assets/callpenjemput.png')}
                                  style={styles.img}
                                />
                                <Image
                                  source={require('../../Assets/chatpenjemput.png')}
                                  style={styles.img}
                                />
                              </View>
                              <View style={styles.viewuser}>
                                <Text style={styles.txt}>
                                  {item.nama_penjemput}
                                </Text>
                                <Text style={styles.txt}>
                                  {item.alamat_penjemput}
                                </Text>
                                <Text style={styles.txt}>
                                  {item.telpon_penjemput}
                                </Text>
                                <TouchableOpacity style={styles.touchchat} onPress={()=>this.props.navigation.navigate("Chatidnasabah2",{item:item})}>
                                  <Text style={styles.txt1}>chat sekarang</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={styles.viewmenu}>
                                <TouchableOpacity
                                  style={styles.touchmenu}
                                  onPress={() =>
                                    this.props.navigation.navigate(
                                      'Detailnasabah',
                                      {item: item},
                                    )
                                  }>
                                  <Image
                                    source={require('../../Assets/menuku.png')}
                                    style={styles.imgmenu}
                                  />
                                </TouchableOpacity>
                                <Image
                                  source={require('../../Assets/graybola.png')}
                                  style={styles.imgbola}
                                />
                              </View>
                            </View>
                          ) : (
                            <View></View>
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

export default connect(mapStateToProps)(Riwayatpenjemputan);
