import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {styles} from './Styleresetpassword';
import {connect} from 'react-redux';

class Resetpassword extends Component {
  constructor() {
    super();
    this.state = {
      passwordlama: '',
      passwordbaru: '',
      konfirmasipassword: '',
      method: 'put',
    };
  }

  componentDidMount() {
    // this.getPenjemput();
    console.log('Ini token', this.props.userToken.userReducer.token);
  }
  editPassword = () => {
    console.log('mulai Mengirim');

    const {passwordbaru, passwordlama, konfirmasipassword, method} = this.state;
    const formData = new FormData();

    formData.append('password_lama', passwordlama);
    formData.append('password', passwordbaru);
    formData.append('password_confirmation', konfirmasipassword);
    formData.append('_method', method);

    console.log('Ini data From Data', formData);
    this.setState({loading: true});
    fetch('https://nsj-trash.herokuapp.com/api/editpassword', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('INI PASSWORD',response.password);
        console.log('ini response', response);
        if (response.status === 'success') {
          ToastAndroid.show('Berhasil Membuat Permintaan!', 1000);
          this.props.navigation.navigate('Home');
          this.setState({loading: false});
        } else if (response.status === 'failed') {
          ToastAndroid.show('Password lama anda salah!', 1000);
        } else if (
          response.password[0] === 'The password confirmation does not match.'
        ) {
          ToastAndroid.show('Password yang anda masukan salah', 1000);
        } else {
          ToastAndroid.show('Gagal Membuat Permintaan,1000');
          this.setState({loading: false});
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show('Gagal Membuat Permintaan', 1000);
      });
    // ToastAndroid.show('Gagal Membuat Permintaan,1000');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.touchback}>
            <Image
              source={require('../../Assets/arrow.png')}
              style={styles.imgback}
            />
          </TouchableOpacity>
          <Text style={styles.txtback}>Resetpassword</Text>
        </View>

        <View style={styles.viewinput}>
          <TextInput
            placeholder={'password lama'}
            style={styles.inputpassword}
            onChangeText={(passwordlama) => this.setState({passwordlama})}
          />
        </View>
        <View style={styles.viewinput2}>
          <TextInput
            placeholder={'password baru'}
            style={styles.inputpassword}
            onChangeText={(passwordbaru) => this.setState({passwordbaru})}
          />
        </View>
        <View style={styles.viewinput2}>
          <TextInput
            placeholder={'konfirmasi password baru'}
            style={styles.inputpassword}
            onChangeText={(konfirmasipassword) =>
              this.setState({konfirmasipassword})
            }
          />
        </View>
        <TouchableOpacity
          style={styles.touchubah}
          onPress={() => this.editPassword()}>
          <Text style={styles.txtubah}>Ubah</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};

export default connect(mapStateToProps)(Resetpassword);
