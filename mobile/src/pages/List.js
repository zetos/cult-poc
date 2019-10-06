import React, { useState, useEffect } from 'react';
import {
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
