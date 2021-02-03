import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Image } from 'react-native'
import {styles} from './Styleinformasi'

export default class Informasi extends Component {
    render() {
        return (
            <View style={styles.container}>
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
          <View style={styles.view1}>
            <Image source={require('../../Assets/kuningbola.png')} style={styles.img}/>
            <Text style={styles.txt}>Menunggu Konfirmasi Pengurus</Text>
          </View>
          <View style={styles.view2}>
            <Image source={require('../../Assets/hijaubola.png')} style={styles.img}/>
            <Text style={styles.txt}>Diterima Penjemputan </Text>
          </View>
          <View style={styles.view2}>
            <Image source={require('../../Assets/merahbola.png')} style={styles.img}/>
            <Text style={styles.txt}>Ditolak Penjemputan</Text>
          </View>
          <View style={styles.view2}>
            <Image source={require('../../Assets/graybola.png')} style={styles.img}/>
            <Text style={styles.txt}>Selesai</Text>
          </View>
          
            </View>
        )
    }
}
