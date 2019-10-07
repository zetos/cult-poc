import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  AsyncStorage
} from 'react-native';

import SpotList from '../components/SpotList';
import logo from '../assets/logo.png';

export default function List() {
  const [deities, setDeities] = useState([]);

  useEffect(() => {
    (async () => {
      const user_id = await AsyncStorage.getItem('user');
      const socket = socketio('http://192.168.100.12:3001', {
        query: { user_id }
      });

      socket.on('booking_response', booking => {
        Alert.alert(
          `Your reserve at ${booking.spot.cult} in ${booking.date} was ${
            booking.approved ? 'APPROVED' : 'REJECTED'
          }.`
        );
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const storagedDeities = await AsyncStorage.getItem('deities');
      const deitiesArray = storagedDeities
        .split(',')
        .map(deity => deity.trim());

      setDeities(deitiesArray);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <ScrollView>
        {deities.map(deity => (
          <SpotList deity={deity} key={deity} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  }
});
