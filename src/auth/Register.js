import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {styles} from '../auth/Styleregister';
import LottieView from 'lottie-react-native';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bebas: true,
      bebas2: true,
      nama: '',
      email: '',
      password: '',
      password2: '',
      phone: '',
      address: '',
      loading: false,
    };
  }
  Register = () => {
    console.log('mulai Mengirim');

    const {nama, email, password, password2, phone, address} = this.state;
    const formData = new FormData();

    formData.append('name', nama);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password confirmation', password2);
    formData.append('telpon', phone);
    formData.append('alamat', address);

    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/register', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: `Bearer ${this.state.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        const {password, password2} = this.state;
        const {token, error} = response;
        console.log('ini response', response);
        if (password.length < 6) {
          ToastAndroid.show('Minimal Password 6 karakter', 1000);
          // AsyncStorage.setItem('token', token);
          // this.props.navigation.navigate('Login');
          this.setState({loading: false});
        } else if (token) {
          ToastAndroid.show('Behasil Mendaftar', 1000);
          this.setState({loading: false});
          this.props.navigation.navigate('Login');
        } else {
          ToastAndroid.show('Email Sudah Digunakan!', 1000);
          this.setState({loading: false});
          // this.props.navigation.navigate('Login');
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show('Email sudah Digunakan', 1000);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{width: '100%'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.touchback}>
            <Image
              source={require('../Assets/arrow.png')}
              style={styles.imgback}
            />
            <Text style={styles.txtback}>Register</Text>
          </TouchableOpacity>
          <Image
            source={require('../Assets/register2.png')}
            style={styles.imgregister}
          />
          <View style={styles.container2}>
            <View style={styles.viewname}>
              <TextInput
                placeholder={'Name'}
                style={styles.inputname}
                onChangeText={(nama) => this.setState({nama})}
                autoCapitalize={'none'}
              />
              <Image
                source={require('../Assets/user.png')}
                style={styles.imgname}
              />
            </View>
            <View style={styles.viewemail}>
              <TextInput
                placeholder={'Email'}
                style={styles.inputemail}
                keyboardType={'email-address'}
                onChangeText={(email) => this.setState({email})}
                autoCapitalize={'none'}
              />
              <Image
                source={require('../Assets/email.png')}
                style={styles.imgemail}
              />
            </View>
            <View style={styles.viewpassword}>
              <TextInput
                placeholder={'Password'}
                style={styles.inputpassword}
                secureTextEntry={this.state.bebas}
                autoCapitalize={'none'}
                onChangeText={(password) => this.setState({password})}
              />
              <TouchableOpacity
                onPress={() => this.setState({bebas: !this.state.bebas})}>
                <Image
                  source={
                    this.state.bebas
                      ? require('../Assets/eye.png')
                      : require('../Assets/invisible.png')
                  }
                  style={styles.imgpassword}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.viewconfirm}>
              <TextInput
                placeholder={'Confirm Password'}
                style={styles.inputconfirm}
                secureTextEntry={this.state.bebas2}
                onChangeText={(password2) => this.setState({password2})}
                autoCapitalize={'none'}
              />
              <TouchableOpacity
                onPress={() => this.setState({bebas2: !this.state.bebas2})}>
                <Image
                  source={
                    this.state.bebas2
                      ? require('../Assets/eye.png')
                      : require('../Assets/invisible.png')
                  }
                  style={styles.imgconfirm}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.viewnumber}>
              <TextInput
                placeholder={'Phone Number'}
                style={styles.inputnumber}
                keyboardType={'number-pad'}
                onChangeText={(phone) => this.setState({phone})}
              />
              <Image
                source={require('../Assets/phone.png')}
                style={styles.imgnumber}
              />
            </View>
            <View style={styles.viewaddress}>
              <TextInput
                placeholder={'Address'}
                style={styles.inputaddress}
                textAlignVertical={'top'}
                multiline={true}
                onChangeText={(address) => this.setState({address})}
                autoCapitalize={'none'}
              />
              <Image
                source={require('../Assets/address.png')}
                style={styles.imgaddress}
              />
            </View>
            <TouchableOpacity
              style={styles.touchregister}
              onPress={() => this.Register()}>
              {this.state.loading == false ? (
                <Text style={styles.txttouchregister}>Register</Text>
              ) : (
                <ActivityIndicator color={'blue'} />
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
