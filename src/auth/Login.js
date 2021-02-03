import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  Linking,
} from 'react-native';
import {styles} from '../auth/Stylelogin';
import AsyncStorage from '@react-native-community/async-storage';
import LottieView from 'lottie-react-native';
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password2: true,
      email: '',
      password: '',
      loading: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        if (value !== null) {
          this.setState({token: value});
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
  }
  Login = () => {
    console.log('mulai Mengirim');

    const {email, password} = this.state;
    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);

    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/login', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: `Bearer ${this.state.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        const {token, error} = response;

        this.props.userLogin(token);

        console.log('ini response', response);
        if (response.user.role == 3) {
          ToastAndroid.show('Berhasil Masuk', 1000);
          AsyncStorage.setItem('token', token);
          AsyncStorage.setItem('role', response.user.role.toString());

          this.props.navigation.replace('Home1');
          // AsyncStorage.setItem('token', token);
          // this.props.userLogin(token);

          this.setState({loading: false});
        } else if (response.user.role == 1) {
          ToastAndroid.show('Berhasil Masuk', 1000);
          AsyncStorage.setItem('token', token);
          AsyncStorage.setItem('role', response.user.role.toString());

          this.props.navigation.replace('Home2');
        } else if (response.user.role == 2) {
          ToastAndroid.show('Berhasil Masuk', 1000);
          AsyncStorage.setItem('role', response.user.role.toString());
          AsyncStorage.setItem('token', token);
          this.props.navigation.replace('Home3');
        } else {
          ToastAndroid.show('Email atau password salah!', 1000);
          this.setState({loading: false});
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show('Email Atau Password Salah', 1000);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../Assets/orang.jpg')} style={styles.img} />
        {/* <Text>Welcome!</Text> */}
        <View style={styles.container2}>
          <Text style={styles.txtlogin}>Welcome!</Text>
          <View style={styles.viewusername}>
            <TextInput
              placeholder={'Email'}
              style={styles.inputusername}
              onChangeText={(email) => this.setState({email})}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
            />
            <Image
              source={require('../Assets/email.png')}
              style={styles.imguser}
            />
          </View>
          <View style={styles.viewpassword}>
            <TextInput
              placeholder={'Password'}
              style={styles.inputpassword}
              onChangeText={(password) => this.setState({password})}
              secureTextEntry={this.state.password2}
              autoCapitalize={'none'}
            />
            <TouchableOpacity
              onPress={() => this.setState({password2: !this.state.password2})}>
              <Image
                source={
                  this.state.password2
                    ? require('../Assets/eye.png')
                    : require('../Assets/invisible.png')
                }
                style={styles.imgpassword}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.touchlogin}
            onPress={() => this.Login()}>
            {this.state.loading == false ? (
              <Text style={styles.txttouchlogin}>Login</Text>
            ) : (
              <LottieView
                source={require('../Assets/5814-loading.json')}
                autoPlay={true}
                style={styles.imgloading}
              />
            )}
          </TouchableOpacity>
          <View style={styles.viewdont}>
            <Text style={styles.txtdont}>Don't have an acount? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.txtregister}>Register</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.touchforgot}
            onPress={() =>
              Linking.openURL('http://nsj-trash.herokuapp.com/password/reset')
            }>
            <Text style={styles.txtforgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.boxcontainer}>
          <Text style={styles.txtlogin}>Login</Text>
          <View style={styles.viewusername}>
            <TextInput
              placeholder={'Username'}
              style={styles.inputusername}
              keyboardType={'email-address'}
            />
          </View>
          <View style={styles.viewpassword}>
            <TextInput placeholder={'Password'} style={styles.inputpassword}/>
          </View>

          <TouchableOpacity style={styles.touchlogin} onPress={()=>this.props.navigation.navigate("Home1")}>
            <Text style={styles.txttouchlogin}>Login</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (token) => dispatch({type: 'TOKEN_USER', payload: token}),
  };
};

export default connect(null, mapDispatchToProps)(Login);
