import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
// import Indux from './Indux'
// import {Styles} from './Stylesplash';
// import HomeNasabah from '../Nasabah/HomeNasabah'
import Indux from '../auth/Indux';
import Login from './Login';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: true,
    };
    this.componentDidMount = function () {
      console.log(' Console Log Ini Dari componentDidMount');
      setTimeout(() => {
        AsyncStorage.getItem('token')
          .then((value) => {
            console.log('ini Value', value);
            this.props.userLogin({token: value});
            if (value !== null) {
              AsyncStorage.getItem('role').then((role) => {
                if (role == 1) {
                  this.props.navigation.replace('Home2');
                } else if (role == 2) {
                  this.props.navigation.replace('Home3');
                } else if (role == 3) {
                  this.props.navigation.replace('Home1');
                } else {
                  this.props.navigation.replace('Login');
                }
              });
            } else {
              this.props.navigation.replace('Login');
            }
          })
          .catch((err) => console.log(err));
        // console.log('ini Token',this.props);
        // this.props.navigation.navigate("Login")
        // this.setState({
        //   role: false,
        // });
      }, 2000);
    };
    // (this.componentDidUpdate = function () {
    //   console.log(' Console Log Ini Dari componentDidUpdate');
    // });
  }
  getUser() {
    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((responseJson) => responseJson.json())
      .then((responseJson) => {
        console.log('ini dia', responseJson);
        // console.log(responseJson);
        // const {status} = responseJson;
        if (responseJson) {
          this.setState({
            data: responseJson.user,
            refresh: false,
            loading: false,
          });
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
  splash = () => {
    // if (this.state.role) {
    return (
      <View style={{flex: 1, backgroundColor: '#fffafa'}}>
        <Image
          source={require('../Assets/Logo.jpg')}
          style={{
            width: '80%',
            height: 150,
            alignSelf: 'center',
            marginTop: '50%',
          }}
        />
        <Text
          style={{
            fontSize: 30,
            color: '#32CD32',
            fontWeight: 'bold',
            alignSelf: 'center',
            marginTop: '10%',
          }}>
          BankSampah
        </Text>
      </View>
    );
  };

  render() {
    // if (this.state.role) {
    //   return <View style={{flex: 1}}>{this.splash()}</View>;
    // } else {
    //   return <Login />;
    // }

    return(
      <View style={{flex:1}}>
        {this.splash()}
      </View>
    )
    //   if (this.state.role) {
    //     return <View style={{flex: 1}}>{this.splash()}</View>;
    //   } else {
    //     return <Login />;
    //   }
  }
}
const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (token) => dispatch({type: 'TOKEN_SPLASH', payload: token}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
