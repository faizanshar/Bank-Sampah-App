import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './Styledetailscreen';
import LottieView from 'lottie-react-native';

class Detailscreen extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: false,
    };
  }
  componentDidMount() {
    console.log('ini ID', this.props.route.params.item);
    console.log('INITOKEN', this.props.userToken.userReducer.token);
    this.getData();
  }
  getData() {
    this.setState({loading: true});

    fetch(
      `https://nsj-trash.herokuapp.com/api/nasabah/riwayatpenjemputan/${this.props.route.params.item.id}`,
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
          <ScrollView>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.touchback}
                onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../../Assets/arrow.png')}
                  style={styles.imgback}
                />
              </TouchableOpacity>
              <Text style={styles.txtback}>Detail penjemputan</Text>
            </View>
            <View style={styles.container2}>
              <Image
                source={{uri: this.state.data.foto}}
                style={styles.imgfoto}
              />
              <View style={styles.view1}>
                <View style={styles.viewimg}>
                  <Image
                    source={require('../../Assets/penjemputuser.png')}
                    style={styles.img}
                  />
                  <Image
                    source={require('../../Assets/callpenjemput.png')}
                    style={styles.img}
                  />
                  <Image
                    source={require('../../Assets/time.png')}
                    style={styles.img}
                  />
                  <Image
                    source={require('../../Assets/mappenjemput.png')}
                    style={styles.img}
                  />
                </View>
                <View style={styles.viewtxt}>
                  <Text style={styles.txt}>{this.state.data.nama}</Text>
                  <Text style={styles.txt}>{this.state.data.telpon}</Text>
                  <Text style={styles.txt}>{this.state.data.created_at}</Text>
                  <Text
                    style={styles.txt}
                    onPress={() => Linking.openURL(this.state.data.url_alamat)}>
                    {this.state.data.alamat}
                  </Text>
                </View>
              </View>
            </View>
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

export default connect(mapStateToProps)(Detailscreen);
