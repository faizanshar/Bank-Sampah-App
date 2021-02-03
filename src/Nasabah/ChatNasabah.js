import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './Stylechatnasabah';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

// import AsyncStorage from '@react-native-community/async-storage';

class ChatNasabah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log('INI TOKEN', this.props.userToken.userReducer);
    this.getKontak();
  }

  getKontak() {
    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/kontaknasabah', {
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
  render() {
    return (
      <View>
        {this.state.loading !== false ? (
          <View>
            <LottieView
              source={require('../Assets/28724-loading-v3.json')}
              autoPlay={true}
              style={styles.imgloading}
            />
            <Text style={styles.txttunggu}>Tunggu Sebentar...</Text>
            <View style={{width: '10%', height: 30}}></View>
          </View>
        ) : (
          <View>
            {this.state.data.map((item, index) => {
              return (
                <View key={index} style={{marginTop: '0.5%'}}>
                  <TouchableOpacity
                    style={styles.touchkontak}
                    onPress={() =>
                      this.props.navigation.navigate('Chatidnasabah', {
                        item: item,
                      })
                    }>
                    <Image source={{uri: item.foto}} style={styles.img} />
                    <View style={{marginLeft: '5%'}}>
                      <Text style={styles.txtnama}>{item.alamat}</Text>
                      <Text style={styles.txtnomor}>{item.telpon}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
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

export default connect(mapStateToProps)(ChatNasabah);
